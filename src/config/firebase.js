import firebase from "firebase";

const firebaseConfig = {
  //  Your Config Goes Here...
};

const tinderApp = firebase.initializeApp(firebaseConfig);

const db = tinderApp.firestore();
const auth = tinderApp.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const storage = tinderApp.storage();

export default db;
export { auth, googleAuthProvider, facebookAuthProvider, storage };
