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
