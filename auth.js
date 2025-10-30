<script>
// Initialize Firebase (only if not already)
const firebaseConfig = {
  apiKey: "AIzaSyCswU-LrTo6nOe_JkmepizOHwWyZxbteCc",
  authDomain: "famfresh-ea11f.firebaseapp.com",
  projectId: "famfresh-ea11f",
  storageBucket: "famfresh-ea11f.firebasestorage.app",
  messagingSenderId: "713550151605",
  appId: "1:713550151605:web:48641c0ed46771542223fc",
  measurementId: "G-TW5GD58FYC"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// ----------- REGISTER FUNCTION -----------
function registerUser() {
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Account created successfully!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

// ----------- LOGIN FUNCTION -----------
function loginUser() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

// ----------- LOGOUT FUNCTION -----------
function logoutUser() {
  firebase.auth().signOut()
    .then(() => {
      alert("Logged out successfully!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

// ----------- AUTH GUARD -----------
firebase.auth().onAuthStateChanged((user) => {
  const currentPage = window.location.pathname.split("/").pop();
  if (!user && currentPage === "dashboard.html") {
    window.location.href = "login.html";
  }
});
</script>
