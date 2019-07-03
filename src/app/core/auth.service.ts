import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // start with no user
  authState: any = null;
  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(data => (this.authState = data));
  }

  // verify user
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // get current user id
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : null;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
