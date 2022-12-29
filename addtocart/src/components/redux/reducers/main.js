import { combineReducers } from "redux";
import { cartReducers } from "./reducer";

const rootred = combineReducers({
  cartReducers,
});

export default rootred
