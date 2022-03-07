import {ADD_CART} from './actionsType'

export const addCart = (product) => ({
    type: ADD_CART,
    product
})