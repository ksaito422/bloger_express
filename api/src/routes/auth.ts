import { Router } from 'express';

import { register, login } from 'src/interfaces/controllers/auth.controller';

export default function (router: Router) {
  router.post('/auth/register', register);
  router.post('/auth/login', login);
}
