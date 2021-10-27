import * as admin from 'firebase-admin';
import { NextFunction } from 'express';

/**
 * Firebaseのユーザ削除
 */
export const deleteUser = async (next: NextFunction, uid: string) => {
  try {
    await admin.auth().deleteUser(uid);
  } catch (e) {
    console.error(e);
    next(e);
  }
};
