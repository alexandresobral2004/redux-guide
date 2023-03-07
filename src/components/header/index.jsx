<<<<<<< Updated upstream
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
=======
import { useState,useMemo } from "react";

//busca o Reducer
import {useSelector,useDispatch} from 'react-redux'
import {loginUser,logoutUser} from "../../redux/user/actions";

>>>>>>> Stashed changes

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

<<<<<<< Updated upstream
// Utilities
import { loginUser, logoutUser } from "../../redux/user/actions";
=======

>>>>>>> Stashed changes

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

<<<<<<< Updated upstream
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.userReducer);
=======
  //carregando o reducer para receber as actions
  const {currentUser} = useSelector(rootReducer=>rootReducer.userReducer)

  const {products} = useSelector(rootReducer=>rootReducer.cartReducer)


  const productsCount = useMemo(()=>{
    return products.reduce((acc,curr)=>acc+curr.quantity,0)
  },[products])

  const dispatch = useDispatch()
>>>>>>> Stashed changes

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

<<<<<<< Updated upstream
  const handleLoginClick = () => {
    dispatch(loginUser({ name: "Felipe Rocha", email: "felipe@rocha.com" }));
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  };
=======

  const handleLoginClick=()=>{
    console.log('Login')
    //tudo que for enviado no payload é acessado no reducer
    //o dispatch dispara as actions
    dispatch(loginUser({name:'alex',email:'alexrocha40@hotmail.com'}))
  }

  const handleLogoutClick=()=>{
    console.log('Logout')
    dispatch(logoutUser())
  }
  
>>>>>>> Stashed changes

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
<<<<<<< Updated upstream
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}

        <div onClick={handleCartClick}>Carrinho</div>
=======
      {currentUser ? (  
        <div onClick={handleLogoutClick}>Sair</div>
      ):(
        <div onClick={handleLoginClick}>Login</div>
      )}
        
        <div onClick={handleCartClick}>Carrinho({productsCount})</div>
>>>>>>> Stashed changes
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
