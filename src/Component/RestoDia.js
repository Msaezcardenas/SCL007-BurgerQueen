import React, { Component } from 'react';
import {restoDia} from '../Json/restoDia.json'


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
                return(
                    <div className= 'container btnDesayuno'>
                       <div className='col-md-4'>
                       <div className='card'>

                            <div className='btn btn-success'>
                            {food.precio}
                            </div> 
                        </div>
                        </div>
                    </div>)
            })
        })
    }
    render(){
        return(
            <div className= 'container btnRestoDia'>
            <div className='col-md-4'>
            <div className='card'>
                <button type='button' className='btn btn-success' onClick={this.comidaDia}> Menu del día </button>
                {this.state.restoDiaArr} 
        </div>
        </div>
        </div>
        )
    }
}

export default RestoDia;