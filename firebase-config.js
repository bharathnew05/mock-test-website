<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA6co5hGP2VIi3WpQ2g-_RdHXjUscJMNB4",
    authDomain: "mocktestapp-21d38.firebaseapp.com",
    projectId: "mocktestapp-21d38",
    storageBucket: "mocktestapp-21d38.firebasestorage.app",
    messagingSenderId: "66131594877",
    appId: "1:66131594877:web:21abe4d84a060ebcc46b14",
    measurementId: "G-XG2781BE99"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
