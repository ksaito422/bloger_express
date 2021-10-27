import { Response, Request, NextFunction } from 'express';
import { verifyIdToken } from 'src/interfaces/services/verifyIdToken';
import { getUser, registUser } from 'src/interfaces/models/user';

/**
 * 新規登録
 * @param req
 * @param res
 * @param next
 */
export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const decodedToken = await verifyIdToken(req, next);
    await registUser(decodedToken!.uid, req.body.name);

    res.status(201).json({ id: decodedToken!.uid, name: req.body.name });
  } catch (e) {
    next(e);
  }
};

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
