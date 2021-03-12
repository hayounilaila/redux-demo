import {INCREMENT, DECREMENT} from "../constants/actionType";

export function incrementCounter() {
    return {
        type : INCREMENT
    }
}


export function decrementCounter() {
    return {
        type : DECREMENT
    }
}
