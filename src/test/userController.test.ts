import request from 'supertest';
import app from '../index';
import { describe, it, expect } from '@jest/globals';

describe('User Profile Update', () => {
    it('should update the user profile successfully', async () => {
        const res = await request(app)
            .put('/api/users/1')
            .send({
                name: 'John Doe',
                email: 'john@example.com',
                password: 'NewPassword123!'
            })
            .set('Authorization', 'Bearer validToken');

        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Perfil actualizado con éxito');
    });

    it('should return an error if token is missing', async () => {
        const res = await request(app).put('/api/users/1').send({
            name: 'John Doe',
            email: 'john@example.com',
            password: 'NewPassword123!'
        });

        expect(res.status).toBe(401);
        expect(res.body.message).toBe('No autorizado, token faltante');
    });
});
// Removed the incorrect expect function implementation

