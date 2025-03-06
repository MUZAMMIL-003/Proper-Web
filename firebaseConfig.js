 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDR2eUtk5dgFtkFEdK-Hj5355bPy6PqHJw",
   authDomain: "proper-web-94784.firebaseapp.com",
   projectId: "proper-web-94784",
   storageBucket: "proper-web-94784.firebasestorage.app",
   messagingSenderId: "537756614200",
   appId: "1:537756614200:web:6bf9ee835210c671bbf0cd",
   measurementId: "G-8KP01DQT6V"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);