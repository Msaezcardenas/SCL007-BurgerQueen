import React, { Component } from 'react';
import {desayuno} from '../Json/desayuno.json'


class Desayuno extends Component{
    constructor(props){
        super(props);
        //this.state = el estado actual del componente
        //agregamos constructor y super para cambiar el estado del componente
        this.state={
            desayuno,
            desayunoArr: []
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
            <div className= 'container btnDesayuno'>
            <div className='col-md-4'>
            <div className='card'>
                <button type='button' className='btn btn-success' onClick={this.comida}>Desayuno</button>
                {this.state.desayunoArr} 
        </div>
        </div>
        </div>
        )
    }
}

export default Desayuno;