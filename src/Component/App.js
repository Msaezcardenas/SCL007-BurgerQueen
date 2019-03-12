import React, { Component } from 'react';
import './App.css';

import Header from './Global/Header';
import Footer from './Global/Footer';
import Content from './Global/Content';

class App extends Component {
  render() {
    return (
      <div className = "app">
       <Header/>
       <Content />
       <Footer />
      </div>
    );
  }
}

export default App;
