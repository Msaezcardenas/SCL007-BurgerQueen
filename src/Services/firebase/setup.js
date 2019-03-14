import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';


firebase.initializeApp(
{
    apiKey: "AIzaSyDMys9ZKjAjqF-CvzIOanDQGymvyn967Oo",
    authDomain: "burger-queen-a674b.firebaseapp.com",
    databaseURL: "https://burger-queen-a674b.firebaseio.com",
    projectId: "burger-queen-a674b",
  });

const db = firebase.firestore();
export default db;