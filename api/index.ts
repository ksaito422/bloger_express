import express from 'express';
import routes from 'src/routes';

const app = express();
const port = 8000;

// src/routes/indexでルーティングする
const router = express.Router();
routes(router);
app.use('/api/v1', router);

// 共通エラーハンドリング
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);

  res.status(err.statusCode || 500).json({
    message: err.message || err,
    errors: err.errors || '',
  });
});

// 8000番ポートでリクエスト待ち
app.listen(port, () => console.log(`Example app listening on port ${port}`));
