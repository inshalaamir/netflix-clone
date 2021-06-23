import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAzn00znJrVGSbqyhC_dChXZ3fNWngwAeM",
    authDomain: "netflix-clone-e0a16.firebaseapp.com",
    projectId: "netflix-clone-e0a16",
    storageBucket: "netflix-clone-e0a16.appspot.com",
    messagingSenderId: "795783857632",
    appId: "1:795783857632:web:267a62ff797a43fb271785"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {auth}
  export default db