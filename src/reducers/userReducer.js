import { TOGGLE_TODO } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case TOGGLE_TODO:
            return action.payload;
        default:
            return state;
    }
}