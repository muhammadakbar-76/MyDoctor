import {initializeApp} from 'firebase/app'
import {API_KEY_FIREBASE, MESSAGE_SENDER_ID, APP_ID_FIREBASE} from '@env';

const firebaseConfig = {
    apiKey: API_KEY_FIREBASE,
  
    authDomain: "my-doctor-76.firebaseapp.com",
  
    projectId: "my-doctor-76",
  
    storageBucket: "my-doctor-76.appspot.com",
  
    messagingSenderId: MESSAGE_SENDER_ID,
  
    appId: APP_ID_FIREBASE
}
  
  // Initialize Firebase
  
  const fire = initializeApp(firebaseConfig);

  export default fire;