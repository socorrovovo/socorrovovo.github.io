import React, { Component } from 'react';
import User from '../Users/User';

class Item extends Component {

  render() {
    const {
      id,
      about,
      like,
      name,
      tags,
      url,
      user,
    } = this.props;

    return (
      <div key={id} className="tool-item" id={ 'tool' + id }>
        <a href={url} className="tool-item-name">{name}</a>
        <div className="tool-item-description">
          <div className="tool-item-about">{about}</div>
          <div className="tool-item-tags">
            {tags.map((tag, i) => <a key={i} href={'tag/'+tag} className="tag">{tag}</a>)}
          </div>
        </div>
        <div className="tool-item-info">
          <span className="tool-item-like">{like}</span> | <span className="tool-item-user"><User user={user} /></span>
        </div>
      </div>
    );
  }
}

export default Item;
