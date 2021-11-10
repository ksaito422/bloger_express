import app from 'src/app';
import supertest from 'supertest';
import { verifyIdToken } from 'src/interfaces/services/verifyIdToken';

describe('POST /articles/{userId}', () => {
  const postData = {
    title: 'テスト',
    content: 'テスト',
  };

  it('return 403', async () => {
    const res = await supertest(app).post('/api/v1/articles/7047a861-5e10-492b-8cf1-be191f103387').send(postData);

    expect(res.statusCode).toBe(403);
  });

  it('return 201', async () => {
    (verifyIdToken as jest.Mock) = jest.fn().mockReturnValue('token');
    const res = await supertest(app).post('/api/v1/articles/7047a861-5e10-492b-8cf1-be191f103387').send(postData);

    expect(res.statusCode).toBe(201);
  });

  it('equal response data key', async () => {
    (verifyIdToken as jest.Mock) = jest.fn().mockReturnValue('token');
    const res = await supertest(app).post('/api/v1/articles/7047a861-5e10-492b-8cf1-be191f103387').send(postData);

    expect(res.body).toEqual('');
  });
});
