import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDY1eifKiKluTKk2ocb99aM0u6OpBbLQlg",
  authDomain: "wily-app-42f2e.firebaseapp.com",
  databaseURL: "https://wily-app-42f2e.firebaseio.com",
  projectId: "wily-app-42f2e",
  storageBucket: "wily-app-42f2e.appspot.com",
  messagingSenderId: "442446814401",
  appId: "1:442446814401:web:90fcabf7f7da8a89a7c840"
};
    
    
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();