import {ADD_CART, DEL_CART} from './actionsType'

export const addCart = (product) => ({
    type: ADD_CART,
    product
})

export const delCart = (removedProduct) => ({
    type: DEL_CART,
    removedProduct
})