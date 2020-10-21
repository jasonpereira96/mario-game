import { MOVE } from './../../actions/actions';

let initialState = {
    over: false
};
const game = (state = initialState, action, locations) => {
    switch(action.type) {
        case MOVE: {
            return {
                ...state,
                over: locations.mushrooms.every(mushroom => !mushroom.visible)
            };
        }
    }
    return state;
}
export default game;