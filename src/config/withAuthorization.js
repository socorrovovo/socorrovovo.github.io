import React from 'react';
import { withRouter } from 'react-router-dom';

import AuthUserContext from './authUserContext';
import { firebase } from './index';
import * as routes from './routes';

const withAuthorization = (authCondition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push(routes.SIGN_IN);
        }
      });
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => authUser ? <Component /> : null}
        </AuthUserContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization);
}

export default withAuthorization;