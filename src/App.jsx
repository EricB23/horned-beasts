import './App.css';
import Footer from './Footer';
import Gallery from './Gallery';
import Header from './Header';

import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Footer />
        <Gallery />
      </>
    );
  }
}
