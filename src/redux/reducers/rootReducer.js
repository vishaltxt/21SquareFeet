import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";
import { getintouchReducer } from "./getintouchReducer";
import { fetchReducer } from "./fetchcardReducer";
import { likeReducer } from "./likeReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
    contactReducer,
    getintouchReducer,
    fetchReducer,
    likeReducer,
    searchReducer
})
export default rootReducer;