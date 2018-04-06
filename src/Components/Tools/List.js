import React, { Component } from 'react';
import { db } from '../../config';
import Item from './Item';

class List extends Component {

  constructor() {
    super();

    this.state = {
      tools: [],
    };
  }

  componentWillMount() {
    const itemsRef = db.onceGetTools();
    itemsRef.then(
      (response) => {
        let tools = response.val();
        let newState = [];
        for (let tool in tools) {
          newState.push({
            id: tool,
            about: tools[tool].about,
            like: tools[tool].like ? Object.keys(tools[tool].like).length : 0,
            name: tools[tool].name,
            tags: tools[tool].tags,
            url: tools[tool].url,
            user: tools[tool].user,
          });
        }
        this.setState({ tools: newState });
      }
    )
  }

  render() {
    const { tools } = this.state;

    return (
      <ul className="tool-list">
        {
          tools.map((tool, index) => <li key={index} ><Item key={index} { ...tool } /></li>)
        }
      </ul>
    );
  }
}

export default List;
