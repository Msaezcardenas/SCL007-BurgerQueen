import React, { Component } from 'react';
import PropTypes from 'prop-types';
import db from '../Services/firebase/setup';



class NameForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        name: event.target.value
      })
    };
  
    handleSubmit(event) {
      event.preventDefault();
      this.setState({
        name:''
      })
      db.collection('OrdenClientes').add({
        Cliente: this.state.name
      }).then (()=> {
        console.log('enviado')
      }).catch (()=>{
        console.log('error');
      })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" onClick= {this.handleSubmit} />
        </form>
      );
    }
  }
   
  
  export default NameForm;