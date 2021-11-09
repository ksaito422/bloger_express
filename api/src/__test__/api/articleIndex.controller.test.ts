import app from 'src/app';
import supertest from 'supertest';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
afterAll(async () => {
  await prisma.$disconnect();
});

describe('GET /article', () => {
  it('return 200', async () => {
    const res = await supertest(app).get('/api/v1/articles');

    expect(res.statusCode).toBe(200);
  });

  it('equal response length', async () => {
    const res = await supertest(app).get('/api/v1/articles');

    const expectedLength = 2;

    expect(res.body).toHaveLength(expectedLength);
  });

  it('equal response data key', async () => {
    const res = await supertest(app).get('/api/v1/articles');

    const expected = {
      id: expect.anything(),
      userId: expect.anything(),
      title: expect.anything(),
      content: expect.anything(),
      deleted: expect.anything(),
      createdAt: expect.anything(),
      updatedAt: expect.anything(),
    };

    expect(res.body[0]).toEqual(expected);
  });
});
