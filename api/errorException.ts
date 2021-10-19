import { Request, Response } from 'express';

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

export const forbiddenException = (message = '認証して下さい。'): HttpException => {
  return new HttpException(403, message);
};
