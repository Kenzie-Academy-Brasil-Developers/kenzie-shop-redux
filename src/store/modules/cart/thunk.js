import {addCart} from './actions'

export const addCartThunk = (product) => (dispatch) => {
    dispatch(addCart(product))
}