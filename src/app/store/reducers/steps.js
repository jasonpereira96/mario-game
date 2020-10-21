import { MOVE } from './../../actions/actions';

let initialState = 0;

const steps = (state = initialState, action) => {
    switch(action.type) {
        case MOVE: return state + 1;
    }
    return state;
}

export default steps;