import app from 'src/app';
import supertest from 'supertest';
import { verifyIdToken } from 'src/interfaces/services/verifyIdToken';

describe('DELETE /articles/{articleId}', () => {
  it('return 403', async () => {
    const res = await supertest(app).delete('/api/v1/articles/7047a861-5e10-492b-8cf1-be191f103387');

    expect(res.statusCode).toBe(403);
  });

  it('return 204', async () => {
    (verifyIdToken as jest.Mock) = jest.fn().mockReturnValue('token');
    const res = await supertest(app).delete('/api/v1/articles/7047a861-5e10-492b-8cf1-be191f103387');

    expect(res.statusCode).toBe(204);
  });

  it('equal response data key', async () => {
    (verifyIdToken as jest.Mock) = jest.fn().mockReturnValue('token');
    const res = await supertest(app).delete('/api/v1/articles/7047a861-5e10-492b-8cf1-be191f103388');

    expect(res.body).toEqual({});
  });
});
