import React, {Component} from 'react';
import {connect } from 'react-redux';
import { addOrder } from '../actions/menuActions';
import { Card } from 'react-bootstrap';


class DesayunoBtn extends Component {

    render () {
        return (  <button type='button' onClick= {() => {this.props.addItemToMenu(this.props.desayunoData.item,this.props.desayunoData.precio)}} >
        <Card style={{ width: '18rem' }}>
        <Card.Body>
         <Card.Title> {this.props.desayunoData.item} </Card.Title> 
            <Card.Subtitle className="mb-2 text-muted"> {this.props.desayunoData.precio} </Card.Subtitle>
        </Card.Body>
        </Card> </button>)
    }
}

const mapStateToProps = (state)=>({
    ...state
});

// mapDispatchToProps para la accion a mi componente
const mapDispatchToProps = (dispatch) => ({
    addItemToMenu: addOrder(dispatch)
});


export default connect (
    mapStateToProps,
    mapDispatchToProps
) (DesayunoBtn);