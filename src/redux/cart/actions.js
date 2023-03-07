import CartActionTypes from "./action-types"

//ARQUIVO COM AS ACTIONS

export const addProductToCart = (payload)=>({
type:CartActionTypes.ADD_PRODUCT,
payload
}
)

export const removeProductFromCart = (payload)=>({
    type:CartActionTypes.REMOVE_PRODUCT,
    payload,
})

export const increaseProductQuantity = (payload)=>({
    type:CartActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload,
})

export const removeProductQuantity = (payload)=>({
    type:CartActionTypes.REMOVE_PRODUCT_QUANTITY,
    payload,
})