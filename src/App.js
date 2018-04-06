import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";

import Navigation from './Components/Parts/Navigation';
import Home from './Components/Home';
import Form from './Components/Tools/Form';
import SignInPage from './Components/Auth/SignIn';
import SignUpPage from './Components/Auth/SignUp';

import * as routes from './config/routes';
import { firebase } from './config';
import withAuthentication from './config/withAuthentication';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  render() {
    return (
      <Router>
        <div>
          <header className="header">
            <Navigation authUser={this.state.authUser} />
          </header>
          <main className="content container">
            <Route exact path={routes.HOME} component={Home} />
            <Route exact path={routes.TOOL_ADD} component={Form} />
            <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
            <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
          </main>
        </div>
      </Router>
    );
  }
}

export default withAuthentication(App);
