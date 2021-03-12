import {FETCH_SKILLS_REQUEST , FETCH_SKILLS_SUCCESS, FETCH_SKILLS_FAILED} from "../constants/actionType";
import axios from "axios";

export function fetchSkillsRequest() {
    return  {
        type : FETCH_SKILLS_REQUEST
    }
}

export function fetchSkillsSuccess(skills) {
    return {
        type : FETCH_SKILLS_SUCCESS,
        payload : skills
    }
}

export function fetchSkillsFailed(error) {
    return {
        type : FETCH_SKILLS_FAILED,
        payload : error
    }
}


/**
 *  async thunk action
 */

export  function fetchSkillsFromAPI() {

        return function (dispatch) {
            dispatch(fetchSkillsRequest());
            axios.get("https://6049f8f79251e100177cd94f.mockapi.io/it/programming")
                .then(response => dispatch( fetchSkillsSuccess(response.data )))
                .catch(err => dispatch( fetchSkillsFailed(err.message )))
        }
}
