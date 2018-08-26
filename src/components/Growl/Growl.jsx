import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import './Growl.scss';
import { POSITION, TYPE, ACTION } from '../../utils/constants';
import eventManager from '../../utils/eventManager';

// export default class Growl extends Component {
//   constructor() {
//     super();
//     this.state = {};

//     this.success = (text) => {
//       console.log(text);
//     };
//   }

//   render() {
//     return (
//       <div className="growl_container">
//         <div className="close">
//           <MdClose />
//         </div>
//         {this.props.children}
//       </div>
//     );
//   }
// }
// Growl.propTypes = {
//   children: PropTypes.node.isRequired,
// };

const container = null;
const queue = [];
let growlId = 0;

const mergeOptions = (options, type) => ({
  ...options,
  type,
  growlId: growlId++,
});
const emitEvent = (content, options) => {
  if (container !== null) {
    eventManager.emit(ACTION.SHOW, content, options);
  } else {
    queue.push({ action: ACTION.SHOW, content, options });
  }
};

const Growl = {
  success: (content, options) => {
    console.log(content);
    emitEvent(content, mergeOptions(options, TYPE.SUCCESS));
  },
};

export default Growl;
