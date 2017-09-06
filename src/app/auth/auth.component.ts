import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  email: string;
  password: string;
  authenticated: boolean;

  constructor(public authService: AuthService) {
    this.authenticated = authService.authenticated;
  }

  signup() {
    this.authService.emailSignUp(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.emailLogin(this.email, this.password);
    this.email = this.password = '';
  }

  loginWithGoogle() {
    this.authService.googleLogin();
  }

  loginWithGitHub() {
    this.authService.githubLogin();
  }
  loginWithFacebook() {
    this.authService.facebookLogin();
  }
  loginWithTwitter() {
    this.authService.twitterLogin();
  }

  logout() {
    this.authService.signOut();
  }

  ngOnInit() {
  }

}
