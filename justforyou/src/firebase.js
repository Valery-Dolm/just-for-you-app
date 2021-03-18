import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBZsn5k8Y23A_EzmmbU-G5F-6bY8XV6C6Q",
    authDomain: "justforyou-4cfd6.firebaseapp.com",
    projectId: "justforyou-4cfd6",
    storageBucket: "justforyou-4cfd6.appspot.com",
    messagingSenderId: "900848816208",
    appId: "1:900848816208:web:6f84cdb60744e79f6b4155"
  };


 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;