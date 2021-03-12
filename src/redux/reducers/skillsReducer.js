import {FETCH_SKILLS_FAILED, FETCH_SKILLS_REQUEST, FETCH_SKILLS_SUCCESS} from "../constants/actionType";

const initialState = {
    loading : false,
    skills : [],
    error : ''
}


function skillsReducer(state = initialState, action) {
    if(action.type === FETCH_SKILLS_REQUEST) {

        return {
            loading: true,
            skills : [],
            error : ''
        }
    }
    if(action.type === FETCH_SKILLS_SUCCESS) {

        return  {
            loading: false,
            skills : action.payload,
            error: ''
        }
    }
    if(action.type === FETCH_SKILLS_FAILED) {

       return  {
            loading: false,
                skills : [],
            error: action.payload
        }
    }

    return state;
}

export default skillsReducer;
