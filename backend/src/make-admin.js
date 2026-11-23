import 'dotenv/config';
import {query,pool} from './db.js';
const email=process.argv[2]?.trim().toLowerCase();
if(!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){console.error('Usage: npm run admin:promote -- adresse@email.com');process.exit(1);}
try {const r=await query(`UPDATE users SET role='admin' WHERE LOWER(email)=$1 RETURNING id,email,role`,[email]);if(!r.rowCount){console.error('Compte introuvable : inscrivez-vous sur le site avant cette commande.');process.exitCode=1;}else console.log('Compte admin activé pour :',r.rows[0].email,'(déconnectez-vous/reconnectez-vous)');}
catch(e){console.error('Erreur PostgreSQL:',e.message);process.exitCode=1;}
finally{await pool.end();}
