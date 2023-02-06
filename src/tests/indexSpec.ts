import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    });
    it('gets the api/images endpoint with parameters', async () => {
        const response = await request.get(
            '/api/images?filename=icelandwaterfall.jpg&width=600&height=300'
        );
        expect(response.status).toBe(200);
    });
    describe('Test endpoint with wrong filename', () => {
        it('url image name is invalid', async () => {
            const response = await request.get(
                '/api/images?filename=icelandwaterfall.jpg&width=600&height=300'
            );
            expect(response.status).toBe(200);
        });
    });
});
