import { PrismaClient } from '@prisma/client';
import { ArticleType } from 'src/types';

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

/**
 * 記事投稿
 * @param req userId
 * @returns
 */
export const saveArticle = async (req: ArticleType, userId: string) => {
  await prisma.article.create({
    data: {
      userId: userId,
      title: req.title,
      content: req.content,
    },
  });

  return null;
};

/**
 * 記事編集
 * @param articleId req
 * @returns
 */
export const updateArticle = async (articleId: string, req: ArticleType) => {
  await prisma.article.update({
    where: { id: articleId },
    data: {
      title: req.title,
      content: req.content,
    },
  });

  return null;
};
