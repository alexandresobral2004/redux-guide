<<<<<<< Updated upstream
import { combineReducers } from "redux";

import userReducer from "./user/reducer";

const rootReducer = combineReducers({ userReducer });

export default rootReducer;
=======
//ROOT REDUCER - ARMAZENA TODOS OS REDUCERS
import {combineReducers} from 'redux'
import cartReducer from './cart/reducer';
import userReducer from './user/reducer'


const rootReducer = combineReducers({
userReducer,
cartReducer
})

export default rootReducer;
>>>>>>> Stashed changes
