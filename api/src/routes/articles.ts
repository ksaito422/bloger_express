import { Router } from 'express';

import { index, detail, post, put } from 'src/interfaces/controllers/article.controller';

export default function (router: Router) {
  router.get('/articles', index);
  router.get('/articles/:articleId', detail);
  router.post('/articles/:userId', post);
  router.put('/articles/:articleId', put);
}
