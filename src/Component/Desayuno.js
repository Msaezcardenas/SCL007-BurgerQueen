import React, { Component } from 'react';
import {desayuno} from '../Json/desayuno.json'
import {Card, Container, Row, Col} from 'react-bootstrap';


class Desayuno extends Component{
    constructor(props){
        super(props);
        //this.state = el estado actual del componente
        //agregamos constructor y super para cambiar el estado del componente
        this.state={
            desayuno,
            desayunoArr: [],
        }
        // this= a este componente 
        //.bind = "atale", this (a este componente).comida.bind atale la función comida
        this.comida = this.comida.bind(this);
    }
    comida(){
        //this.setState = el estado final de mi componente
        this.setState({
            ...this.state,
            desayunoArr: this.state.desayuno.map((food,i) => {
                return(<button type='button' >
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                     <Card.Title> {food.item} </Card.Title> 
                        <Card.Subtitle className="mb-2 text-muted"> {food.precio} </Card.Subtitle>
                    </Card.Body>
                    </Card> </button> )
            })
        })
    }
    render(){
        return(
            <Container className = 'menuStyle'>
            <Row className = 'Menu'>
            <Col sm = "6">
                <button type='button' className='btn btn-success' onClick={this.comida}>Desayuno</button>
                {this.state.desayunoArr} 
                </Col>
            </Row>
        </Container>
        )
    }
}

export default Desayuno;