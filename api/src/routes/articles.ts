import { Router } from 'express';
import { ArticleController } from 'src/interfaces/controllers/article.controller';

const article = new ArticleController();

export default function (router: Router) {
  router.get('/articles', article.index);
  router.get('/articles/:articleId', article.detail);
  router.post('/articles/:userId', article.post);
  router.put('/articles/:articleId', article.put);
  router.delete('/articles/:articleId', article.destroy);
}
