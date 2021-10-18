import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getArticleAll = async () => {
  const articles = await prisma.article.findMany();

  return articles;
};
