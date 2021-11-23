import { Router } from 'express';

import { AuthController } from 'src/interfaces/controllers/auth.controller';

const auth = new AuthController();

export default function (router: Router) {
  router.post('/auth/register', auth.register);
  router.post('/auth/login', auth.login);
  router.delete('/auth/unregister', auth.unregister);
}
