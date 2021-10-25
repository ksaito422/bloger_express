import { Router } from 'express';

import { index, detail } from 'src/interfaces/controllers/article.controller';

export default function (router: Router) {
  router.get('/articles', index);
  router.get('/articles/:articleId', detail);
}
