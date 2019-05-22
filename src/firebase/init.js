import firebase from 'firebase'
import firestore from 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAmW7kCaDNksm2xv9CgbmjYiXHwMW50iIw",
    authDomain: "moo-chat-6de9a.firebaseapp.com",
    databaseURL: "https://moo-chat-6de9a.firebaseio.com",
    projectId: "moo-chat-6de9a",
    storageBucket: "moo-chat-6de9a.appspot.com",
    messagingSenderId: "846087411346",
    appId: "1:846087411346:web:28f58b6c7a6a5aaa"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()