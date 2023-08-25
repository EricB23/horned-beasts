import { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class SelectedBeast extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.Beast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.Beast.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
