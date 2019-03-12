//Dependencias
import React, { Component } from 'react';
import './App.css';

//Componentes
import Header from './Global/Header';
import Footer from './Global/Footer';
import Content from './Global/Content';

//Data
import items from '../Data/Menu'

class App extends Component {
  render() {
    return (
      <div className = "app">
       <Header title = "Codejobs" items = {items} />
       <Content />
       <Footer copyrigth = "&copy; moluchita " />
      </div>
    );
  }
}

export default App;
