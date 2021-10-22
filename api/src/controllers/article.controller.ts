import { Response, Request, NextFunction } from 'express';
import * as HttpErrorCode from 'src/exceptions/errorCode';
import { getArticleAll } from 'src/models/article';

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
