import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { cartReducer } from "./cart.reducer";

export const rootreducer = combineReducers({
    counter: counterReducer,
    cart: cartReducer
})