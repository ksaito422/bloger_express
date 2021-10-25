import { Router } from 'express';
import { show, getArticlesByUserId } from 'src/interfaces/controllers/user.controller';

export default function (router: Router) {
  router.get('/users/:userId', show);
  router.get('/users/:userId/articles', getArticlesByUserId);
}
