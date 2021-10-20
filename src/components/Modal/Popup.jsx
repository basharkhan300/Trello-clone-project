import React, { Component } from "react";

import { Modal, Button } from "react-bootstrap";

import CheckList from "../CheckList/CheckList";
import "./Popup.css";

class Popup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal size="lg" show={this.props.show}>
          <Modal.Header>name={this.props.name}</Modal.Header>
          <Modal.Body>
            <div>
              <CheckList id={this.props.id} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closeHandler}>close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Popup;
