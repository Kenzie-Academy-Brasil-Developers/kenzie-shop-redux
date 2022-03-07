import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { prodctsReducerThunk } from '../../store/modules/products/thunk'
import { addCartThunk } from '../../store/modules/cart/thunk'
import {Container, List} from './style'
import Button from '../Button'


const ProductList = () => {
    
    const dispatch = useDispatch()
    const products  = useSelector(store => store.products)

    useEffect(() => {
        dispatch(prodctsReducerThunk())
    },[dispatch])
    
    const addProduct = (id) => {
        dispatch(addCartThunk(id))
    }


    return (      
            <Container>
                <List>
                    {products.map((product) => 
                        <li key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <span>R$: {product.price.toFixed(2).replace('.', ',')}</span>
                            <Button onClick={() => addProduct(product)}>Adicionar ao carrinho</Button>
                        </li>
                    )}
                </List>
          </Container>     
    )
}

export default ProductList