import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import growl from '../../src/growl';

class Root extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render() {
    return (
      <div>
        <h1>Demo</h1>
        <button type="button" onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}

export default hot(module)(Root);
