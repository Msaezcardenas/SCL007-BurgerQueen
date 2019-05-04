import { ADD_ITEM } from "./actionTypes";

export  const addOrder = dispatch => (addItem, addPrice) => {
    dispatch ({
        type: ADD_ITEM,
        payload: {
            itemOrder :addItem,
            priceOrder: addPrice
        }
    })
}
