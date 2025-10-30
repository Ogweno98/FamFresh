// Initialize Firebase (if not already)
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCswU-LrTo6nOe_JkmepizOHwWyZxbteCc",
    authDomain: "famfresh-ea11f.firebaseapp.com",
    projectId: "famfresh-ea11f",
    storageBucket: "famfresh-ea11f.firebasestorage.app",
    messagingSenderId: "713550151605",
    appId: "1:713550151605:web:48641c0ed46771542223fc",
    measurementId: "G-TW5GD58FYC"
  });
}

const db = firebase.firestore();

const appAuth = {
  async register({ name, email, password, role }) {
    try {
      // Create user with email/password
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Save extra info in Firestore
      await db.collection('users').doc(user.uid).set({
        name,
        email,
        role,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },

  async login(email, password) {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Optional: fetch role to redirect correctly
      const doc = await db.collection('users').doc(user.uid).get();
      const role = doc.data()?.role || 'buyer';

      return { success: true, role };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },

  logout() {
    return firebase.auth().signOut();
  }
};

// Auth guard for dashboards
firebase.auth().onAuthStateChanged(async (user) => {
  const page = window.location.pathname.split("/").pop();

  if (!user && page.includes('dashboard')) {
    window.location.href = 'login.html';
  }
});
