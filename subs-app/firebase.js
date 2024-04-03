// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfkiAWTSFigay-pSa-9uRwQdv6rneU0VA",
  authDomain: "ctrlaltelite-cbce0.firebaseapp.com",
  projectId: "ctrlaltelite-cbce0",
  storageBucket: "ctrlaltelite-cbce0.appspot.com",
  messagingSenderId: "640385069178",
  appId: "1:640385069178:web:410d0cc9fc1a70a3118bc3",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
