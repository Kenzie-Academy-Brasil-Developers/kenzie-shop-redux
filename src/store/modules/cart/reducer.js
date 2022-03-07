import {ADD_CART, DEL_CART} from './actionsType'


const initialState = JSON.parse(localStorage.getItem('@user:Products')) || []


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART: 
            return [...state, action.product]

        case DEL_CART:
            const {removedProduct} = action
            const newCart = state.filter((product) => product.id !== removedProduct.id)
            localStorage.setItem('@user:Products', JSON.stringify(newCart))
            return newCart  
        
        default:
            return state
    }
}

export default cartReducer