import {ADD_CART} from './actionsType'

const initialState = []

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART: 
            return [...state, action.product]
        default:
            return state
    }
}

export default cartReducer