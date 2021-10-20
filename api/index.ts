import express, { Request, Response, NextFunction } from 'express';
import routes from 'src/routes';
import dotenv from 'dotenv';
import * as HttpException from 'src/exceptions/errorException';
import { firebaseConfig } from 'src/config/firebaseConfig';
import * as admin from 'firebase-admin';

dotenv.config();
admin.initializeApp(firebaseConfig);

const app = express();
const port = 8000;

// src/routes/indexでルーティングする
const router = express.Router();
routes(router);
app.use('/api/v1', router);

// Httpエラーの分類
app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
  err.message === '400' && next(HttpException.badRequestException());
  err.message === '401' && next(HttpException.unauthorizedException());
  err.message === '403' && next(HttpException.forbiddenException());
  err.message === '404' && next(HttpException.notfoundException());
  err.message === '409' && next(HttpException.conflictException());
  err.message === '422' && next(HttpException.unprocessableEntityException());
  err.message === '429' && next(HttpException.tooManyRequestsException());
  next(HttpException.internalServerErrorException());
});

// 共通エラーハンドリング
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);

  res.status(err.statusCode || 500).json({
    message: err.message || err,
    errors: err.errors || '',
  });
});

// 8000番ポートでリクエスト待ち
app.listen(port, () => console.log(`Example app listening on port ${port}`));
