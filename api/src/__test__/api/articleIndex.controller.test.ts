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

  it('equal response data', async () => {
    const articles = await prisma.article.findMany();
    const res = await supertest(app).get('/api/v1/articles');

    expect(res.body).toStrictEqual(articles);
  });
});
