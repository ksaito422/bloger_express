import { Response, Request, NextFunction } from 'express';
import { verifyIdToken } from 'src/interfaces/models/verifyIdToken';
import { deleteUser } from 'src/interfaces/models/deleteUser';
import { UserRepository } from 'src/interfaces/repositories/user.repository';

export class AuthController {
  static userRepository = new UserRepository();

  /**
   * 新規登録
   * @param req
   * @param res
   * @param next
   */
  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const decodedToken = await verifyIdToken(req, next);
      await AuthController.userRepository.registUser(decodedToken!.uid, req.body.name);

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
  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const decodedToken = await verifyIdToken(req, next);
      const user = await AuthController.userRepository.getUser(decodedToken!.uid);

      res.status(200).json({ id: user.id, name: user.name });
    } catch (e) {
      next(e);
    }
  };

  /**
   * 退会
   * @param req
   * @param res
   * @param next
   */
  unregister = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const decodedToken = await verifyIdToken(req, next);
      await deleteUser(next, decodedToken!.uid);
      await AuthController.userRepository.deleteUserById(decodedToken!.uid);

      res.status(204).send();
    } catch (e) {
      next(e);
    }
  };
}
