import {FETCH_PRODUCTS} from './actionsTypes'

const initialState = []

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS:
            const {products} = action

            return products
        default: 
            return state
    }
}

export default productsReducer