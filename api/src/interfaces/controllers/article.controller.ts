import { Response, Request, NextFunction } from 'express';
import { getArticleAll, getArticleDetail } from 'src/interfaces/models/article';
import { verifyIdToken } from 'src/interfaces/services/verifyIdToken';
import * as HttpErrorCode from 'src/exceptions/errorCode';

/**
 * 全記事取得
 * @param req
 * @param res
 * @param next
 */
export const index = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const articles = await getArticleAll();

    res.status(200).json(articles);
  } catch (e) {
    next(e);
  }
};

/**
 * 記事詳細取得
 */
export const detail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await verifyIdToken(req, next);
    const article = await getArticleDetail(req.params.articleId);

    if (!article) {
      throw new Error(HttpErrorCode.HTTP_NOT_FOUND);
    }

    res.status(200).json({
      id: article.id,
      title: article.title,
      content: article.content,
      user: {
        id: article.userId,
      },
    });
  } catch (e) {
    next(e);
  }
};
