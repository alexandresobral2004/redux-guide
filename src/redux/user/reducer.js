<<<<<<< Updated upstream
import UserActionTypes from "./action-types";

const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, currentUser: action.payload };
    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

export default userReducer;
=======
/* eslint-disable default-case */
import UserActionTypes from "./action-types"



//exemplo de user reducer - é uma função
const initialState = {
  currentUser: null, 
}

    //use reducer recebe 2 params(state,action) 
    //a action é um objeto com type e payload
    const userReducer=(state=initialState,action)=>{
      switch(action.type){
        case UserActionTypes.LOGIN:
          console.log(action.payload)
          return {...state,currentUser:action.payload}
        case UserActionTypes.LOGOUT:
          console.log(action.payload)
          return {...state,currentUser:null}
        default:
            return state;
      }
  
      
  
  
      /*  if(action.type == UserActionTypes.LOGIN){
       // return {...state,currentUser:10}  
       console.log(action.payload)
       
       //o return adiciona o conteúdo de currenUser ao state inicial
        return {...state,currentUser:action.payload}
    }
    if(action.type == UserActionTypes.LOGOUT){
       //o return adiciona o conteúdo de currenUser ao state inicial
       return {...state,currentUser:null}
    }
    return state */

}

export default userReducer
>>>>>>> Stashed changes
