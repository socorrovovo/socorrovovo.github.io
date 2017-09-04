import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authenticated$: Observable<boolean>;
  uid$: Observable<string>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.authenticated$ = firebaseAuth.authState.map(user => !!user);
    this.uid$ = firebaseAuth.authState.map(user => user.uid);
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Sucesso: ', value);
      })
      .catch(err => {
        console.log('Algo errado aconteceu: ', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Entrou!');
      })
      .catch(err => {
        console.log('Algo errado aconteceu: ', err.message);
      })
  }

  loginWithGoogle() {
    this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}
