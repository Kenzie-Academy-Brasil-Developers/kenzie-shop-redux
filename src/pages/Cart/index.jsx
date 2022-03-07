import {useDispatch, useSelector} from 'react-redux'
import Button from '../../components/Button'
import {Container, List, Aside, EmptyCart} from './style'
import {FiTrash} from 'react-icons/fi'
import ButtonIcon from '../../components/ButtonIcon'
import { delCartThunk } from '../../store/modules/cart/thunk'
import { toast } from 'react-toastify'
import emptyCart from '../../assets/emptyCart.svg'
import MotionDiv from '../../components/FramerMotion'


const Cart = () => {

    const cart = useSelector(store => store.cart)
    const totalCart = Math.floor(cart.reduce((acc, {price}) => acc + price, 0))
    const length = cart.length
  
    const dispatch = useDispatch()

    const deleteProduct = (product) => {
        dispatch(delCartThunk(product, toastMessage))
    }
    const toastMessage = (message) => {
        toast.success(message)
    }

    return (
        <MotionDiv>
            {length ? (
                 <Container>
                 <List>
                     {cart.map((product) => 
                         <li key={product.id}>
                             <img src={product.image} alt={product.title} />
                             <h3>{product.title}</h3>
                             <span>R$: {product.price.toFixed(2).replace('.', ',')}</span>
                             <ButtonIcon icon={FiTrash} onClick={() => deleteProduct(product)}/>
                         </li>
                     )}
                 </List>
 
                 <Aside>
                     <h3>Resumo do Pedido</h3>
                     <div>
                         <span>Quantidade: {length} itens</span>
                         <span>Total: R$ {totalCart.toFixed(2).replace('.', ',')}</span>
                     </div>
                     <Button>Finalizar pedido</Button>
                 </Aside>
             </Container>       
            ) : (
                <EmptyCart>
                    <img src={emptyCart} alt='Carrinho vazio'/>
                    <h2>Seu carrinho esta vazio...</h2>
               </EmptyCart>
            )}
        
        </MotionDiv>
    )
}

export default Cart