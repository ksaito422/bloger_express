import { Response, Request, NextFunction } from 'express';
import { verifyIdToken } from 'src/interfaces/models/verifyIdToken';
import { UserRepository } from 'src/interfaces/repositories/user.repository';

export class UserController {
  static userRepository = new UserRepository();
  /**
   * ユーザー情報取得
   * @param req
   * @param res
   * @param next
   */
  show = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const decodedToken = await verifyIdToken(req, next);
      const user = await UserController.userRepository.getUser(req.params.userId);

      res.status(200).json({ name: user.name, email: decodedToken!.email });
    } catch (e) {
      next(e);
    }
  };

  /**
   * ユーザー投稿記事取得
   * @param req
   * @param res
   * @param next
   */
  getArticlesByUserId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await verifyIdToken(req, next);
      const user = await UserController.userRepository.getArticles(req.params.userId);

      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  };
}
