import firebase from 'firebase';



const config = {
    apiKey: "AIzaSyDMys9ZKjAjqF-CvzIOanDQGymvyn967Oo",
    authDomain: "burger-queen-a674b.firebaseapp.com",
    databaseURL: "https://burger-queen-a674b.firebaseio.com",
    projectId: "burger-queen-a674b",
    storageBucket: "burger-queen-a674b.appspot.com",
    messagingSenderId: "234473553667"
  };

firebase.initializeApp(config);

export const db = firebase.firestore();