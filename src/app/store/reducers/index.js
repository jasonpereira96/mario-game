import board from './board';
import locations from './locations';
import steps from './steps';
import game from './game';

const initialState = {
    steps: 0,
    locations: {
        player: {
            row: 0, col: 3
        },
        mushrooms: [{
            row: 4, col: 3, visible: true
        }],
    },
    board: {
        initialized: false,
        length: 10
    },
    game: {
        over: false
    }
};

export default function rootReducer(state = initialState, action) {
    return {
        board: board(state.board, action),
        locations: locations(state.locations, action, state.board),
        steps: steps(state.steps, action),
        game: game(state.game, action, state.locations)
    };
}

