import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { prodctsReducerThunk } from '../../store/modules/products/thunk'
import Button from '../Button'


const ProductList = () => {
    
    const dispatch = useDispatch()
    const products  = useSelector(store => store.products)

    useEffect(() => {
        dispatch(prodctsReducerThunk())
    },[dispatch])
    


    return (      
            <section>
                <ul>
                    {products.map((product) => 
                        <li key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.title}</h3>
                            <span>{product.description}</span>
                            <span>{product.price}</span>
                            <Button>Adicionar ao carrinho</Button>
                        </li>
                    )}
                </ul>
          </section>     
    )
}

export default ProductList