import { PrismaClient } from '@prisma/client';
import { ArticleType } from 'src/types';

export class ArticleRepository {
  static prisma = new PrismaClient();

  /**
   * 全記事取得
   * @returns
   */
  getArticleAll = async () => {
    const articles = await ArticleRepository.prisma.article.findMany();

    return articles;
  };

  /**
   * 記事詳細取得
   * @param id
   * @returns
   */
  getArticleDetail = async (id: string) => {
    const article = await ArticleRepository.prisma.article.findUnique({
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
  saveArticle = async (req: ArticleType, userId: string) => {
    await ArticleRepository.prisma.article.create({
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
  updateArticle = async (articleId: string, req: ArticleType) => {
    await ArticleRepository.prisma.article.update({
      where: { id: articleId },
      data: {
        title: req.title,
        content: req.content,
      },
    });

    return null;
  };

  /**
   * 記事削除
   * @param articleId
   */
  deleteArticle = async (articleId: string) => {
    await ArticleRepository.prisma.article.delete({
      where: {
        id: articleId,
      },
    });
  };
}
