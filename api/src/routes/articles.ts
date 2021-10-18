import { Router } from 'express';

import { index } from 'src/controllers/article.controller';

export default function (router: Router) {
  router.get('/articles', index);
}
