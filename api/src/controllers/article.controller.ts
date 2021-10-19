import { Response, Request, NextFunction } from 'express';

import * as HttpException from '../../errorException';
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

    throw new Error('400');

    res.status(200).json(articles);
  } catch (e) {
    if (e instanceof Error) {
      e.message === '400' && next(HttpException.badRequestException());
    }
    next(e);
  }
};
