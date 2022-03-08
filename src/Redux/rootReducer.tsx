import { combineReducers } from "redux";
import userReducers from "./Reducer";



const rootReducer = combineReducers({

    data:userReducers
 })
 export default rootReducer;

