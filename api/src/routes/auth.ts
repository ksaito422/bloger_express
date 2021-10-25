import { Router } from 'express';

import { login } from 'src/interfaces/controllers/auth.controller';

export default function (router: Router) {
  router.post('/auth/login', login);
}
