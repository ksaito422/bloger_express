import { Router } from 'express';

import { login } from 'src/controllers/auth.controller';

export default function (router: Router) {
  router.post('/auth/login', login);
}
