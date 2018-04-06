import React, { Component } from 'react';
import { db } from '../../config';

class User extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }

  componentWillMount() {
    console.log(this.props);
    const { user } = this.props;
    console.log(user);
    const itemsRef = db.onceGetUser(user);
    itemsRef.then(
      (response) => {
        let newState = response.val();
        console.log(newState);
        this.setState({ user: newState });
      }
    )
  }

  render() {
    const { name, username } = this.state.user;
    return (
      <span>{(username) ? username : name}</span>
    );
  }

}

export default User;