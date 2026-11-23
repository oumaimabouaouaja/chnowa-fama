import 'dotenv/config';
import {randomBytes} from 'node:crypto';
import bcrypt from 'bcryptjs';
import {pool} from './db.js';
const samples=[
 {name:'Club Innovation Tunis (démo)',type:'club',region:'Tunis',title:'Hackathon Intelligence Artificielle — Démo',category:'Intelligence artificielle',address:'Centre-ville, Tunis',days:45,capacity:80,description:'Événement fictif de démonstration : hackathon consacré aux solutions d’intelligence artificielle.',participation_type:'application'},
 {name:'Association Sport Médenine (démo)',type:'association',region:'Médenine',title:'Running Challenge Médenine — Démo',category:'Running et marathon',address:'Centre-ville, Médenine',days:55,capacity:120,description:'Événement fictif de démonstration : course conviviale ouverte aux amateurs de running.',participation_type:'direct'},
 {name:'Club Robotique Sfax (démo)',type:'club',region:'Sfax',title:'Atelier Arduino et Robotique — Démo',category:'Robotique et électronique',address:'Centre-ville, Sfax',days:65,capacity:35,description:'Événement fictif de démonstration : initiation pratique à Arduino et à la robotique.',participation_type:'direct'},
 {name:'Club Cyber Sousse (démo)',type:'club',region:'Sousse',title:'Workshop Cybersécurité — Démo',category:'Cybersécurité',address:'Centre-ville, Sousse',days:75,capacity:50,description:'Événement fictif de démonstration : bonnes pratiques de sécurité informatique.',participation_type:'application'},
];
const c=await pool.connect();
try{await c.query('BEGIN');for(let i=0;i<samples.length;i++){
 const x=samples[i], mail=`demo-club-${i+1}@example.invalid`;
 const hash=await bcrypt.hash(randomBytes(32).toString('hex'),10);
 const r=(await c.query('SELECT id FROM regions WHERE name=$1',[x.region])).rows[0];
 const cat=(await c.query('SELECT id FROM categories WHERE name=$1',[x.category])).rows[0];
 if(!r||!cat)throw Error('Initialisez la base avec npm run db:init avant le seed');
 const u=(await c.query('INSERT INTO users(name,email,password_hash,region_id) VALUES($1,$2,$3,$4) ON CONFLICT(email) DO UPDATE SET name=EXCLUDED.name RETURNING id',[x.name,mail,hash,r.id])).rows[0];
 const o=(await c.query('INSERT INTO organizers(user_id,name,type,description,region_id,approved) VALUES($1,$2,$3,$4,$5,true) ON CONFLICT(user_id) DO UPDATE SET approved=true RETURNING id',[u.id,x.name,x.type,'Profil fictif utilisé pour la démonstration.',r.id])).rows[0];
 const found=await c.query('SELECT id FROM events WHERE organizer_id=$1 AND title=$2',[o.id,x.title]);
 if(!found.rowCount){const start=new Date(Date.now()+x.days*86400000);start.setUTCHours(9,0,0,0);const end=new Date(start.getTime()+3*3600000);await c.query(`INSERT INTO events(organizer_id,category_id,title,description,region_id,address,start_at,end_at,price,capacity,participation_type) VALUES($1,$2,$3,$4,$5,$6,$7,$8,0,$9,$10)`,[o.id,cat.id,x.title,x.description,r.id,x.address,start,end,x.capacity,x.participation_type]);}
}await c.query('COMMIT');console.log('Données de démonstration chargées (idempotent).');}
catch(e){await c.query('ROLLBACK');console.error(e.message);process.exitCode=1;}
finally{c.release();await pool.end();}
