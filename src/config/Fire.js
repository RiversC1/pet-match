import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyASzKCvhwQozc8py1HkpcvNnQJ25B7tf-w",
    authDomain: "petmatch-89822.firebaseapp.com",
    databaseURL: "https://petmatch-89822.firebaseio.com",
    projectId: "petmatch-89822",
    storageBucket: "petmatch-89822.appspot.com",
    messagingSenderId: "617061061862"
  };
  const fire = firebase.initializeApp(config);

  export default fire;