import { combineReducers } from "redux";
import authReducer from "./user.reducers"
import appReducer from "./app.reducers";

export default combineReducers({appReducer,authReducer});
