import {DECREMENT, INCREMENT} from "../constants/actionType";

const counterState = 100;

export function counterReducer(state = counterState, action) {
    if(action.type === INCREMENT) return state + 1;
    if(action.type === DECREMENT) return state - 1;
    return state;
}
