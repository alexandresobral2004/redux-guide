
import {useSelector} from 'react-redux'
import rootReducer from '../../redux/root-reducer';
import CartItem from '../cart-item';


// Styles
import * as Styles from "./styles";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const {products}= useSelector((rootReducer)=>rootReducer.cartReducer)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map(product=><CartItem product={product}/>)}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
