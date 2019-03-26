import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import db from '../Services/firebase/setup';
import { Link } from 'react-router-dom';
import Navigation from '../Component/NavProyect';

class Create extends Component {

  constructor() {
    super();
    this.ref = db.collection('boards');
    this.state = {
      title: '',
      description: '',
      author: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, author } = this.state;

    this.ref.add({
      title,
      description,
      author
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
        author: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { title, description, author } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              < Navigation />
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary"> Lista de Pedidos </Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Cliente:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Nombre del Cliente" />
              </div>
              <div class="form-group">
                <label for="description">Pedido:</label>
                <textArea class="form-control" name="description" onChange={this.onChange} placeholder="Pedido" cols="80" rows="3">{description}</textArea>
              </div>
              <div class="form-group">
                <label for="author">Precio:</label>
                <input type="text" class="form-control" name="author" value={author} onChange={this.onChange} placeholder="Total" />
              </div>
              <button type="submit" class="btn btn-success">Agregar Pedido</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;