//Dependencias
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


//Componentes
import NameForm from './Component/NameForm';
// import CardsMenu from './Component/Cards'
import './App.css';
import Navigation from './Component/NavProyect';
// import Content from './Component/Content';
import Desayuno from './Component/Desayuno';
import RestoDia from './Component/RestoDia';


class App extends Component {

  render() {
    return (
      <div>
         < Navigation />
         <br></br>
          < NameForm/>
          {/* <CardsMenu/> */}
          {/* <Content /> */}
          < Desayuno />
          < RestoDia />

      </div>
    );
  }
}

export default App;