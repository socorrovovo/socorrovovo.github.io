import firebase from 'firebase'

const prodConfig = {
  apiKey: "AIzaSyD5w6B4tlufuz3xeSfalISdkWDZRcomjRA",
  authDomain: "socorrovovo-900cf.firebaseapp.com",
  databaseURL: "https://socorrovovo-900cf.firebaseio.com",
  projectId: "socorrovovo-900cf",
  storageBucket: "",
  messagingSenderId: "82878640409",
};

const devConfig = {
  apiKey: "AIzaSyD5w6B4tlufuz3xeSfalISdkWDZRcomjRA",
  authDomain: "socorrovovo-900cf.firebaseapp.com",
  databaseURL: "https://socorrovovo-900cf.firebaseio.com",
  projectId: "socorrovovo-900cf",
  storageBucket: "",
  messagingSenderId: "82878640409",
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if(!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
