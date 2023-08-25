import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './Footer';
import Gallery from './Gallery';
import Header from './Header';
import SelectedBeast from './SelectedBeast';

import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      currentBeast: {},
    };
  }
  handleClose = () => this.setState({ show: false });
  handleOpen = () => this.setState({ show: true });
  getBeast = (Beasts) => this.setState({ currentBeast: Beasts });

  render() {
    return (
      <>
        <Container>
          <Header title="Beast Judge" />
          <Footer />
          <Gallery
            message="Make your Opinion Known."
            handleOpen={this.handleOpen}
            getBeast={this.getBeast}
          />
        </Container>
        <SelectedBeast
          show={this.state.show}
          handleClose={this.handleClose}
          Beast={this.state.currentBeast}
        />
      </>
    );
  }
}

export default App;
