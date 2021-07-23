import { combineReducers } from "redux";


import bookReducer from "./books";
import filtersReducer from "./filters";
import cartReducer from "./cart";

const rootReducer = combineReducers({
    books: bookReducer,
    filters: filtersReducer,
    cart: cartReducer
})

export default rootReducer