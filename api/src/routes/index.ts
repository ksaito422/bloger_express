import { Router } from 'express';

/**
 * ルーティングを管理
 * 新規追加する場合、このファイル内でルーティング定義をrequireする
 * @param router
 */
export default function (router: Router) {
  require('src/routes/articles').default(router);
}
