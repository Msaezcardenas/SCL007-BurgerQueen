import React, { Component } from 'react';
import {restoDia} from '../Json/restoDia.json';
import {Card, Container,Row, Col} from 'react-bootstrap';


class RestoDia extends Component{
    constructor(props){
        super(props);
        //this.state = el estado actual del componente
        //agregamos constructor y super para cambiar el estado del componente
        this.state={
            restoDia,
            restoDiaArr: []
        }
        // this= a este componente 
        //.bind = "atale", this (a este componente).comida.bind atale la función comida
        this.comidaDia = this.comidaDia.bind(this);
    }
    comidaDia(){
        //this.setState = el estado final de mi componente
        this.setState({
            ...this.state,
            restoDiaArr: this.state.restoDia.map((food,i) => {
                return(<button type='button' >
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title> {food.item} </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"> {food.tipo}</Card.Subtitle>
                    <Card.Text>
                        {food.precio}
                    </Card.Text>
                    </Card.Body>
                    </Card> </button>)
            })
        })
    }
    render(){
        return(
           <Container className= 'menuStyle'>
            <Row className = 'Menu'>
            <Col sm = "6">
                <button type='button' className='btn btn-success' onClick={this.comidaDia}> Menu del día </button>
                {this.state.restoDiaArr} 
              </Col>
                </Row>
           </Container>
        )
    }
}

export default RestoDia;