import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './Footer';
import Gallery from './Gallery';
import Header from './Header';

import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Container>
        <Header title="Beast Judge" />
        <Footer />
        <Gallery message="Make your Opinion Known." />
      </Container>
    );
  }
}

export default App;
