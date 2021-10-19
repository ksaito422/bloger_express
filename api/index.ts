import express from 'express';
import routes from 'src/routes';
import dotenv from 'dotenv';
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

// 共通エラーハンドリング
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);

  res.status(err.status || 500).json({
    status: err.status || 500,
    detail: err.message || err,
    errors: err.errors || '',
  });
});

// 8000番ポートでリクエスト待ち
app.listen(port, () => console.log(`Example app listening on port ${port}`));
