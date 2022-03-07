import {useDispatch, useSelector} from 'react-redux'


const Cart = () => {

    const cart = useSelector(store => store.cart)
    

    return (
        <>
            <ul>
                {cart.map((product) => 
                    <li key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <span>{product.price}</span>
                    </li>
                )}
            </ul>
        </>
    )
}

export default Cart