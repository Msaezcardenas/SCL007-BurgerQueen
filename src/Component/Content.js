import React, {Component} from 'react';
import { runInThisContext } from 'vm';

class Content extends Component {
  constructor () {
    super ();

    this.state = {
      count: 0,
      number1: 0,
      number2: 0,
      result: 0
    };
    // .bind(this)  se usa para que el metodo (handlecountclick) ,en este caso, tenga acceso a 
    //todo el objeto de la clase, el state, props.
    this.handleCountClick = this.handleCountClick.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);
  }

  //Para comprobar si el componente ya cargo
  componentDidMount () {
    this.setState({
      count: 1
    });
  }

  handleCountClick(e){
    if (e.target.id === 'add'){
      this.setState({
        count: this.state.count + 1
      });
    } else if (e.target.id === 'subtract' && this.state.count > 0 ){
      this.setState ({
        count: this.state.count -1
      });
    } else {
      this.setState ({
        count: 0
      });
    }
  }

  handleResultClick (e) {
    this.setState({
        ...this.state,
        result: this.state.number1 + this.state.number2 
      });
  }

  handleInputChanged (e) {
    if (e.target.id === 'number1'){
      this.setState({
        number1: Number(e.target.value)
      });
    } else {
      this.setState({
        number2: Number(e.target.value)
      });
    }
  }

    render() {
      return (
        <div className="Header">
        <h1> Counter: {this.state.count} </h1>

        <p> 
          <button id = "add" onClick = {this.handleCountClick} > + </button>
          <button id = "subtract" onClick = {this.handleCountClick} > - </button>
          <button id = "reset" onClick = {this.handleCountClick} > Reset  </button>

        </p>

        <div>
        <h2> Calculadora </h2>
        <p>
          <input id = "number1" type = "number" value = {this.state.number1} onChange = {this.handleInputChanged} />
          +
          <input id = "number2" type = "number" value = {this.state.number2} onChange = {this.handleInputChanged} />
          <button id = "result" onClick = {this.handleResultClick} > =  </button>

          {this.state.result}
        </p>
        </div>

        </div>
      );
    }
}
  
  export default Content;