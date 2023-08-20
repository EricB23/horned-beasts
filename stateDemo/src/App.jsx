import React from 'react';
import './App.css';
import Header from './Header';
import { Container } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header />
          <Gallery />
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
