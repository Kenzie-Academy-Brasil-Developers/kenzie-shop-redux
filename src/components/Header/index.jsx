import ButtonIcon from "../ButtonIcon"
import {FiShoppingCart} from 'react-icons/fi'
import { HeaderStyled } from "./style"
import {useHistory} from 'react-router-dom'


const Header = () => {

    const history = useHistory()

    return (
        <HeaderStyled>
            <h1>KenzieShop</h1>
            <nav>
                 <ButtonIcon icon={FiShoppingCart} onClick={() => history.push('/cart')}>
                    <span>Carrinho</span>     
                </ButtonIcon>   
            </nav>
        </HeaderStyled>
    )
}

export default Header