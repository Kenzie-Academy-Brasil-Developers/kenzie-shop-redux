import {fetchProducts} from './actions'
import api from '../../../services/api'

export const prodctsReducerThunk = () => (dispatch) => {
    api.get('/products/')
    .then(res => {
        dispatch(fetchProducts(res.data))
    })
}