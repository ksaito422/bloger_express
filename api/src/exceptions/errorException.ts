/**
 * Httpエラーハンドリング
 */
class HttpException extends Error {
  statusCode?: number;
  message: string;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode || 500;
    this.message = message;
  }
}

export const badRequestException = (message = '不正なリクエストです。'): HttpException => {
  return new HttpException(400, message);
};

export const unauthorizedException = (message = '認証情報に誤りがあります。'): HttpException => {
  return new HttpException(401, message);
};

export const forbiddenException = (message = 'アクセス権がありません。ログインをしてください。'): HttpException => {
  return new HttpException(403, message);
};

export const notfoundException = (message = '指定のリソースは存在しません。'): HttpException => {
  return new HttpException(404, message);
};

export const conflictException = (message = 'リソースの競合が発生しました。'): HttpException => {
  return new HttpException(409, message);
};

export const unprocessableEntityException = (message = '処理できない入力値があります。'): HttpException => {
  return new HttpException(422, message);
};

export const tooManyRequestsException = (message = 'リクエスト回数が多いです。'): HttpException => {
  return new HttpException(429, message);
};

export const internalServerErrorException = (
  message = 'システムエラーが発生しました。時間を置いてもう一度お試しください。'
): HttpException => {
  return new HttpException(500, message);
};

export const firebaseVerifyIdTokenException = (
  message = 'ログイン中のユーザーを取得できませんでした。'
): HttpException => {
  return new HttpException(500, message);
};
