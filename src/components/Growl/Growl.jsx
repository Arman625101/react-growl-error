import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

export default class Growl extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="growl_container">
        <div className="close">
          <MdClose />
        </div>
        {this.props.children}
      </div>
    );
  }
}

Growl.propTypes = {
  children: PropTypes.node.isRequired,
};
