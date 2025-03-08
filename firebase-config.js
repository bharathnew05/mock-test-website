// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Your Firebase configuration (Replace with your Firebase credentials)
const firebaseConfig = {
  apiKey: "AIzaSyA6co5hGP2VIi3WpQ2g-_RdHXjUscJMNB4",
  authDomain: "mocktestapp-21d38.firebaseapp.com",
  projectId: "mocktestapp-21d38",
  storageBucket: "mocktestapp-21d38.firebasestorage.app",
  messagingSenderId: "66131594877",
  appId: "1:66131594877:web:21abe4d84a060ebcc46b14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();  // Google Auth Provider

// Google Sign-In Function
export function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert(`Welcome, ${user.displayName}!`);
      localStorage.setItem("loggedInUser", user.email); // Store user info
      window.location.href = "index.html"; // Redirect after login
    })
    .catch((error) => {
      console.error("Error signing in with Google:", error);
      alert("Google Sign-In failed!");
    });
}
