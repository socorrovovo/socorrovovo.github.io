import { auth } from './firebase';
import { firebase } from './index';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign In Google
export const doSignInWithGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
}
// // Sign In
// export const doSignInWithEmailAndPassword = (email, password) =>
//   auth.signInWithEmailAndPassword(email, password);

// // Sign In
// export const doSignInWithEmailAndPassword = (email, password) =>
//   auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
  auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);

