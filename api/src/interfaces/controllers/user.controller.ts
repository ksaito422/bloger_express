import { Response, Request, NextFunction } from 'express';
import { verifyIdToken } from 'src/interfaces/services/verifyIdToken';
import { getUser, getArticles } from 'src/interfaces/models/user';

/**
 * ユーザー情報取得
 * @param req
 * @param res
 * @param next
 */
export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const decodedToken = await verifyIdToken(req, next);
    const user = await getUser(req.params.userId);

    res.status(200).json({ name: user.name, email: decodedToken!.email });
  } catch (e) {
    next(e);
  }
};

/**
 * ユーザー投稿記事取得
 */
export const getArticlesByUserId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await verifyIdToken(req, next);
    const user = await getArticles(req.params.userId);

    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};
