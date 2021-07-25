/**
 * reducer 
 */
import { combineReducers } from "redux";
import ecommerceReducer from "./ecommerceReducer";
import appSettings from "./appSettings";

const reducers = combineReducers({
   ecommerce: ecommerceReducer,
   appSettings
})

export default reducers;