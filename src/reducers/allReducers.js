import counter from "./counter";
import reducer from "./bugReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter,
    reducer
})
export default allReducers;