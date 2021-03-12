import {combineReducers} from "redux";
import {counterReducer} from "./counterReducer";
import skillsReducer from "./skillsReducer";
const rootReducer = combineReducers({
    counter : counterReducer,
    skills : skillsReducer
})


export default rootReducer;
