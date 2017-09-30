import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCEJ-eJhZHvdLVFDKl9VDvHyrbSqK8_ZMw",
  authDomain: "rndb-e5f03.firebaseapp.com",
  databaseURL: "https://rndb-e5f03.firebaseio.com",
  projectId: "rndb-e5f03",
  storageBucket: "rndb-e5f03.appspot.com",
  messagingSenderId: "444855884095",
};

firebase.initializeApp(config)

export default firebase
