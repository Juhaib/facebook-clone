  import firebase from "firebase";
  
  const firebaseConfig = {
    apiKey: "AIzaSyAXA2gzXex8aFKhn1vGF79Jb-JAV2U_7xI",
    authDomain: "facebook-ead5b.firebaseapp.com",
    projectId: "facebook-ead5b",
    storageBucket: "facebook-ead5b.appspot.com",
    messagingSenderId: "139029659228",
    appId: "1:139029659228:web:c8f4e96543e48af5d7f099",
    measurementId: "G-2V37KMKMRM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;