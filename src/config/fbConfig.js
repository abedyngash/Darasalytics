import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import * as admin from 'firebase-admin';

var config = {
    apiKey: "AIzaSyATsOBvPIaOwQUfV6WDy4yzm2dRUm-kXdE",
    authDomain: "showcase-3debf.firebaseapp.com",
    databaseURL: "https://showcase-3debf.firebaseio.com",
    projectId: "showcase-3debf",
    storageBucket: "showcase-3debf.appspot.com",
    messagingSenderId: "3641612382"
  };

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true})

// admin.initializeApp({
//   credential: admin.credential.applicationDefault(),
//   databaseURL: 'https://showcase-3debf.firebaseio.com'
// });


export default firebase;