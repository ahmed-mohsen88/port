import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCMNzApf5YtjwhxVNaE-ba7k4A5DCY-6UQ",
  authDomain: "portfollio-ahmed-mohsen.firebaseapp.com",
  projectId: "portfollio-ahmed-mohsen",
  storageBucket: "portfollio-ahmed-mohsen.appspot.com",
  messagingSenderId: "869467078312",
  appId: "1:869467078312:web:6cfd4831c2d64f54d90c9d",
  measurementId: "G-PXBRSP1W0V",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

