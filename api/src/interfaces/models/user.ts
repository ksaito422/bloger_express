import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * 新規登録
 * @param uid name
 * @returns
 */
export const registUser = async (uid: string, name: string) => {
  await prisma.user.create({
    data: {
      id: uid,
      name: name,
    },
  });

  return null;
};

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

/**
 * ユーザー削除
 * @param uid
 * @returns
 */
export const deleteUserById = async (uid: string) => {
  await prisma.user.delete({
    where: {
      id: uid,
    },
  });
};
