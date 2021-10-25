import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * 全記事取得
 * @returns
 */
export const getArticleAll = async () => {
  const articles = await prisma.article.findMany();

  return articles;
};

/**
 * 記事詳細取得
 * @param id
 * @returns
 */
export const getArticleDetail = async (id: string) => {
  const article = await prisma.article.findUnique({
    where: { id: id },
    rejectOnNotFound: true,
  });

  return article;
};
