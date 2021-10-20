import { Response, Request, NextFunction } from 'express';
import { verifyIdToken } from 'src/services/verifyIdToken';
import { getUser } from 'src/models/user';

/**
 * ログイン
 * headerのbearerトークンを検証する
 * idTokenに異常がない場合、ユーザ情報を返す
 * @param req
 * @param res
 * @param next
 */
export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const decodedToken = await verifyIdToken(req, next);
    const user = await getUser(decodedToken!.uid);

    res.status(200).json({ id: user.id, name: user.name });
  } catch (e) {
    next(e);
  }
};
