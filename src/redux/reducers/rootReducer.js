import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";
import { getintouchReducer } from "./getintouchReducer";
import { fetchReducer } from "./fetchcardReducer";
import { likeReducer } from "./likeReducer";

const rootReducer = combineReducers({
    contactReducer,
    getintouchReducer,
    fetchReducer,
    likeReducer
})
export default rootReducer;