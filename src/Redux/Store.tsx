import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./rootReducer";


import { composeWithDevTools } from 'redux-devtools-extension'



const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(reduxThunk)))

export default store;
