export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const MOVE_UP = 'MOVE_UP';
export const MOVE_DOWN = 'MOVE_DOWN';
export const INIT = 'INIT';
export const MOVE = 'MOVE';

export const init = length => {
    return {
        type: INIT,
        length
    };
};

export const move = direction => {
    return {
        type: MOVE,
        direction
    };
};