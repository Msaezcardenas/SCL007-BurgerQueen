//Dependencias
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


//CSS
import './App.css';


//Componentes
import Navigation from './Component/NavProyect';
import NameForm from './Component/NameForm';
import Desayuno from './Component/Desayuno';
import RestoDia from './Component/RestoDia';
// import Content from './Component/Content';



class App extends Component {

  render() {
    return (
      <div>
         < Navigation />
         <br></br>
          < NameForm/>
          < Desayuno /> 
          < RestoDia />

      </div>
    );
  }
}

export default App;