//Dependencias
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {db} from './Services/firebase/setup';

//Componentes
import NameForm from './Component/NameForm';

//Data




class App extends Component {

  render() {
    return (
      <div class="container">
          <div class="panel-heading">
            <h3 class="panel-title">
              Burguer Queen
            </h3>
          </div>
          <div class="panel-body">
          < NameForm/>
          <div class= "btnMenu">
          <button variant="danger" type="submit" class="btn btn-success"> Desayuno  </button>
          </div>
          <div class= "btnMenu">
          <button type="submit" class="btn btn-success"> Almuerzo y Cena </button>
          </div>
          </div>
      </div>
    );
  }
}

export default App;