// firebase-init.js
// Replace the placeholders with your Firebase project config
const FIREBASE_CONFIG = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_FIREBASE_APP.firebaseapp.com",
  projectId: "YOUR_FIREBASE_APP",
  storageBucket: "YOUR_FIREBASE_APP.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Initialize if not already
if(!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
