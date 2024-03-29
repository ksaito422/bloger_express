import * as admin from 'firebase-admin';

const serviceAccount = require('src/config/zenn-b1a89-firebase-adminsdk-nzo1a-955366a7a0.json');

export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: 'zenn-b1a89',
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  credential: admin.credential.cert(serviceAccount),
};
