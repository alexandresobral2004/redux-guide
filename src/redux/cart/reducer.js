import CartActionTypes from "./action-types"


//STATE INITIAL DO REDUCER
const initialState = {
    products:[],
    productsTotalPrice:0
}

const cartReducer=(state=initialState,action)=>{

    switch(action.type){
        case CartActionTypes.ADD_PRODUCT:
           const productinCart = state.products.some(
            (product)=>product.id === action.payload.id
           )
         
           if(productinCart){
            return {
                ...state,products:state.products.map((product)=>
                product.id === action.payload.id ? {...product,quantity:product.quantity +1}:product
                ),
            };
           }
        
            return{
                ...state,
                products:[...state.products,{...action.payload,quantity:1}]
            }
         
        case CartActionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                products:state.products.filter(product=>product.id !== action.payload)
            }
        
        case CartActionTypes.INCREASE_PRODUCT_QUANTITY:

            return {
                ...state,
                products:state.products.map(product=>product.id == action.payload?{...product,quantity:product.quantity+1}:{product})
            }

        case CartActionTypes.REMOVE_PRODUCT_QUANTITY:
            return{
                ...state,products:state.products.map(product=>product.id == action.payload?
                    {...product,quantity:product.quantity-1}:
                    {product}
                    )
            }
           
            
        
            
            
        default:
            return state
    }


}

export default cartReducer