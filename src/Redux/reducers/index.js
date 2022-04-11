import { combineReducers } from "redux";
import { productsReducer } from "./ProductsReducers";

const reducers = combineReducers({
    allProducts:productsReducer,
   
});
export default reducers