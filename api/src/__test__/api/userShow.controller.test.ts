import app from 'src/app';
import supertest from 'supertest';
import { verifyIdToken } from 'src/interfaces/services/verifyIdToken';

describe('GET /user/{userId}', () => {
  it('return 403', async () => {
    const res = await supertest(app).get('/api/v1/users/7047a861-5e10-492b-8cf1-be191f103387');

    expect(res.statusCode).toBe(403);
  });

  it('return 404', async () => {
    const res = await supertest(app).get('/api/v1/users/7047a861-5e10-492b-8cf1-be191f103389');

    expect(res.statusCode).toBe(403);
  });

  it('return 200', async () => {
    (verifyIdToken as jest.Mock) = jest.fn().mockReturnValue('token');
    const res = await supertest(app).get('/api/v1/users/7047a861-5e10-492b-8cf1-be191f103387');

    expect(res.statusCode).toBe(200);
  });

  it('equal response data key', async () => {
    (verifyIdToken as jest.Mock) = jest.fn().mockReturnValue('token');
    const res = await supertest(app).get('/api/v1/users/7047a861-5e10-492b-8cf1-be191f103387');

    const expected = {
      name: expect.anything(),
      email: expect.anything(),
    };

    expect(res.body).toEqual(expected);
  });
});
