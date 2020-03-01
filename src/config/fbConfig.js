import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var config = {
    apiKey: "AIzaSyCkkDjwY9F5Gz844dtzIZXNezyyZDiw92g",
    authDomain: "marioplan-2417e.firebaseapp.com",
    databaseURL: "https://marioplan-2417e.firebaseio.com",
    projectId: "marioplan-2417e",
    storageBucket: "marioplan-2417e.appspot.com",
    messagingSenderId: "629253573114",
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase