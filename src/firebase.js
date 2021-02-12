
import firebase from 'firebase/app';
import "firebase/auth"


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,  
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "portal-resource",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};



// initialize Firebase
if (!firebase.apps.length) 
{
    firebase.initializeApp(firebaseConfig);
}
else 
{
    firebase.app(); // if already initialized, use this one
}

export const auth = firebase.auth()
export default firebase