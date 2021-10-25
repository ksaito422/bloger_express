import { Router } from 'express';
import { show } from 'src/interfaces/controllers/user.controller';

export default function (router: Router) {
  router.get('/users/:userId', show);
}
