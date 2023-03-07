<<<<<<< Updated upstream
import { createStore } from "redux";

import rootReducer from "./root-reducer";

const store = createStore(rootReducer);

export default store;
=======
//store do Redux
import {createStore,applyMiddleware } from 'redux'
import rootReducer from './root-reducer'
import logger from 'redux-logger'


const store = createStore(rootReducer,applyMiddleware(logger))


//BIBLIOTECA USADA redux-logger que usa o applyMiddleware

export default store
>>>>>>> Stashed changes
