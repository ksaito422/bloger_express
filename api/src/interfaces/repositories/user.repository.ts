import { PrismaClient } from '@prisma/client';

export class UserRepository {
  static prisma = new PrismaClient();

  /**
   * 新規登録
   * @param uid name
   * @returns
   */
  registUser = async (uid: string, name: string) => {
    await UserRepository.prisma.user.create({
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
  getUser = async (uid: string) => {
    const user = await UserRepository.prisma.user.findUnique({
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
  getArticles = async (uid: string) => {
    const articles = await UserRepository.prisma.article.findMany({
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
  deleteUserById = async (uid: string) => {
    await UserRepository.prisma.user.delete({
      where: {
        id: uid,
      },
    });
  };
}
