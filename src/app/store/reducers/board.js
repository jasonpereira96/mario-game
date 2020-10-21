import { INIT } from './../../actions/actions';

let initialState = {
    initialized: false,
    length: null
}

const board = (board = initialState, action) => {
    switch (action.type) {
        case INIT: return {
            initialized: true,
            length: action.length
        }         
    }
    return board;
}

export default board;