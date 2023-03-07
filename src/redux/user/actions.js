<<<<<<< Updated upstream
import UserActionTypes from "./action-types";

export const loginUser = (payload) => ({
  type: UserActionTypes.LOGIN,
  payload,
});

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT,
});
=======
//ARQUIVO COM OS TYPES DAS ACTIONS

import UserActionTypes from "./action-types";

export const loginUser=(payload)=>({
    type:UserActionTypes.LOGIN,
    payload,
});

export const logoutUser=()=>({
    type:UserActionTypes.LOGIN,


})

>>>>>>> Stashed changes
