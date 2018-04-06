import React, { Component } from 'react';
import withAuthorization from '../../config/withAuthorization';

import { db } from '../../config';

class Form extends Component {

  constructor() {
    super();

    this.state = {
      name: '',
      user: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    db.doCreateTool(
      this.state.name,
      this.state.url,
      this.state.about,
      this.state.tags,
    );

    this.setState({
      name: '',
      url: '',
      about: '',
      tags: '',
    });
  }

  render() {
    return (
      <div>
        <h2>Adicionar</h2>
        <form onSubmit={this.handleSubmit}>
          <input name="name" onChange={this.handleChange} value={this.state.name} />
          <input name="url" onChange={this.handleChange} value={this.state.url} />
          <input name="about" onChange={this.handleChange} value={this.state.about} />
          <input name="tags" onChange={this.handleChange} value={this.state.tags} />
          <button>+</button>
        </form>
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Form);
