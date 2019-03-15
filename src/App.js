//Dependencias
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {db} from './Services/firebase/setup';

//Componentes
import NameForm from './Component/NameForm';
// import CardsMenu from './Component/Cards'
import { Button } from 'react-bootstrap';
import './App.css';
import Navigation from './Component/NavProyect';
// import Content from './Component/Content';
//Data
// import {Menu} from './Component/Menu.json'
// console.log(Menu)



class App extends Component {

  render() {
    return (
      <div>
         < Navigation />
         <br></br>
          < NameForm/>
          {/* <CardsMenu/> */}
          {/* <Content /> */}

          <div className="col-md-4">
          <button variant="danger"  type="submit" className="btn btn-success"> Desayuno  </button>
          <button type="submit" className="btn btn-success"> Almuerzo y Cena </button>
          </div>

      </div>
    );
  }
}

export default App;