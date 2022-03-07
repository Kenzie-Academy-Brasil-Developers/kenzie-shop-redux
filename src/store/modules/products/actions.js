import {FETCH_PRODUCTS} from './actionsTypes'

export const fetchProducts = (products) => ({
    type: FETCH_PRODUCTS,
    products
})
