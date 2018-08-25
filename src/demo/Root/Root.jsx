import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Growl from '../../components/Growl';

class Root extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    Growl.success('a');
  }

  render() {
    return (
      <div>
        <h1>Demo</h1>
        <button type="button" onClick={this.handleClick}>
          Click me
        </button>
        {/* <Growl>Growl success</Growl> */}
      </div>
    );
  }
}

export default hot(module)(Root);
