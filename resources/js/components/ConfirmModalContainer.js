import React, { Component } from 'react';

//import components
import ConfirmModal from './views/ConfirmModal';

export default class ConfirmModalContainer extends Component {
  constructor(props, context) {
   super(props, context);

   this.handleShow = this.handleShow.bind(this);
   this.handleClose = this.handleClose.bind(this);

   this.state = {
     show: false,
   };
 }

 handleClose() {
   this.setState({ show: false });
 }

 handleShow() {
   this.setState({ show: true });
 }
  render() {
    return(
      <ConfirmModal
      handleShow={this.handleShow}
      handleClose={this.handleClose}
      show={this.state.show}
      variant={this.props.variant}
      label={this.props.label}
      message={this.props.message}
      onClick={this.props.onClick}
      />
    )
  }
}
