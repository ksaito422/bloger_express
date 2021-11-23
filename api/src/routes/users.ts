import { Router } from 'express';
import { UserController } from 'src/interfaces/controllers/user.controller';

const user = new UserController();

export default function (router: Router) {
  router.get('/users/:userId', user.show);
  router.get('/users/:userId/articles', user.getArticlesByUserId);
}
