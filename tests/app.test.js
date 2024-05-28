import app from '../src/app'
import request from 'supertest'

describe('GET /user/:id', () => {

    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/user/${id}').send();
        expect(response.statusCode).toBe(200);
    });
});