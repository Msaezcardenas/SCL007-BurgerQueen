import {ADD_ITEM} from '../actions/actionTypes';

export default (
    state= {
        desayunoArr:[],
    }, action ) => {
        switch(action.type){
            case ADD_ITEM: 
            return {
                ...state,
                //hacemos un nuevo arreglo con los  payload que le entregamos 
                desayunoArr: state.desayunoArr.concat([{ 
                    item: action.payload.itemOrder,
                    price: action.payload.priceOrder
                }])
            }
            default: return state;
        }
    }