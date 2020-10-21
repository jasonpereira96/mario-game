import { DIRECTIONS } from '../../constants/constants';
import { INIT, MOVE } from './../../actions/actions';
import { generateLocations } from './../../utils/utils';

let initialState = {};

const locations = (state = initialState, action, boardState) => {
    switch (action.type) {
        case INIT: {
            let _locations = generateLocations(action.length);
            _locations.mushrooms.forEach(mushroom => {
                mushroom.visible = true;
            });
            return _locations;
        }
        case MOVE: {
            let { direction } = action;
            let { row, col } = state.player;
            switch (direction) {
                case DIRECTIONS.UP: {
                    var newRow = row - 1, newCol = col;
                } break;
                case DIRECTIONS.DOWN: {
                    var newRow = row + 1, newCol = col;
                } break;
                case DIRECTIONS.LEFT: {
                    var newRow = row, newCol = col - 1;
                } break;
                case DIRECTIONS.RIGHT: {
                    var newRow = row, newCol = col + 1;
                } break;
            }
            if (isValid(newRow, newCol, boardState.length)) {
                for (let mushroom of state.mushrooms) {
                    if (mushroom.row === newRow && mushroom.col === newCol) {
                        mushroom.visible = false;
                    }
                }
                return {
                    ...state,
                    player: {
                        row: newRow,
                        col: newCol
                    }
                };
            }
        }
    }
    return state;
}

function isValid(row, col, boardLength) {
    return 0 <= row && row < boardLength && 0 <= col && col < boardLength;
}
export default locations;