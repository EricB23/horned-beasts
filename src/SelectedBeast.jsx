import { Component } from 'react';
import { Button, Modal, Card } from 'react-bootstrap';

export default class SelectedBeast extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.Beast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card bg="dark" text="light">
              <Card.Img
                variant="top"
                alt={this.props.title}
                src={this.props.Beast.src}
              />
              <Card.Body>
                <Card.title>{this.props.Beast.title}</Card.title>
                <Card.text>{this.props.Beast.description}</Card.text>
              </Card.Body>
            </Card>
          </Modal.Body>
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
