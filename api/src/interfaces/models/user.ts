import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * ユーザー情報の取得
 * @param uid
 * @returns
 */
export const getUser = async (uid: string) => {
  const user = await prisma.user.findUnique({
    where: { id: uid },
    rejectOnNotFound: true,
  });

  return user;
};

/**
 * ユーザー投稿記事取得
 * @param uid
 * @returns
 */
export const getArticles = async (uid: string) => {
  const articles = await prisma.article.findMany({
    where: {
      userId: {
        equals: uid,
      },
    },
    select: {
      id: true,
      title: true,
      content: true,
    },
  });

  return articles;
};
