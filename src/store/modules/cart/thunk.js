import {addCart, delCart} from './actions'

export const addCartThunk = (product, toastMessage) => (dispatch) => {
    const list = JSON.parse(localStorage.getItem('@user:Products')) || []
    
    const newList = [...list, product]

    localStorage.setItem('@user:Products', JSON.stringify(newList))

    dispatch(addCart(product))
    toastMessage('Adicionado ao carrinho')
    
}

export const delCartThunk = (product, toastMessage) => (dispatch) => {

    dispatch(delCart(product))
    toastMessage('Produto removido')
}