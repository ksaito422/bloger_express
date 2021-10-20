import * as admin from 'firebase-admin';
import { Request, NextFunction } from 'express';
import * as errorCode from 'src/exceptions/errorCode';

/**
 * Firebaseのトークンチェック
 * アプリ側のユーザーがログインしているかチェックする
 * @param authorization
 * @returns
 */
export const verifyIdToken = async (req: Request, next: NextFunction) => {
  try {
    const bearerToken = await req.header('authorization');

    // Authorization Headerがない場合、403エラー
    if (!bearerToken) {
      throw new Error(errorCode.HTTP_FORBIDDEN);
    }

    const idToken = await bearerToken!.replace('Bearer ', '');
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    return decodedToken;
  } catch (e) {
    next(e);
  }
};
