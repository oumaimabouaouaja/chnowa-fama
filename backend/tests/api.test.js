
import { describe, it, expect } from 'vitest';
import request from 'supertest';

const api = request('http://localhost:4000');

describe('Tests API CHNOWA FAMA', () => {

  it('TA01 - Vérifier la disponibilité du Backend', async () => {
    const response = await api.get('/api/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ ok: true });
  });

  it('TA02 - Refuser un utilisateur non connecté', async () => {
    const response = await api.get('/api/me');

    expect(response.status).toBe(401);
  });

});

describe('Tests de validation inscription', () => {

  it('TA03 - Refuser un email invalide', async () => {
    const response = await api
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email: 'email-invalide',
        password: 'Test12345'
      });

    expect(response.status).toBe(400);
  });

  it('TA04 - Refuser un mot de passe trop court', async () => {
    const response = await api
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        password: '123'
      });

    expect(response.status).toBe(400);
  });

});

describe('Tests de sécurité JWT', () => {

  it('TA05 - Refuser un token JWT invalide', async () => {
    const response = await api
      .get('/api/me')
      .set('Authorization', 'Bearer token_invalide');

    expect(response.status).toBe(401);
  });

  it('TA06 - Refuser accès Admin sans authentification', async () => {
    const response = await api
      .get('/api/admin/organizers');

    expect(response.status).toBe(401);
  });

});

describe('Tests intégration PostgreSQL', () => {

  it('TA07 - Récupérer les régions', async () => {
    const response = await api.get('/api/regions');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('TA08 - Récupérer les catégories', async () => {
    const response = await api.get('/api/categories');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

});

describe('Tests API événements', () => {

  it('TA09 - Récupérer la liste des événements', async () => {
    const response = await api.get('/api/events');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

});

describe('Tests sécurité des événements', () => {

  it('TA10 - Refuser la création d’un événement sans authentification', async () => {
    const response = await api
      .post('/api/events')
      .send({
        title: 'Événement Test',
        description: 'Événement pour test automatisé'
      });

    expect(response.status).toBe(401);
  });

});




