import React, { Component } from 'react';
import {connect} from 'react-redux';
import {desayuno} from '../Json/desayuno.json';
import {Card, Container, Row, Col} from 'react-bootstrap';
import {addOrder} from  '../actions/menuActions';
import DesayunoBtn from './Btn_desayuno';


class Desayuno extends Component{
    constructor(props){
        super(props);
        //this.state = el estado actual del componente
        //agregamos constructor y super para cambiar el estado del componente
        this.state={
            desayuno,
            desayunoArr: [],
        }
    }

    render(){
        return(
            <Container className = 'menuStyle'>
            <Row className = 'Menu'>
            <Col sm = "6">
            <h1> Desayuno </h1>
            {this.state.desayuno.map(elem => (<DesayunoBtn desayunoData={elem}/>))}
            </Col>
            </Row>
        </Container>
        )
    }
}

// const mapStateToProps = (state)=>({
//     ...state
// });

// const mapDispatchToProps = (dispatch) => ({
//     addItemToMenu: addOrder(dispatch)
// });


// export default connect (
//     mapStateToProps,
//     mapDispatchToProps
// ) (Desayuno);

export default Desayuno