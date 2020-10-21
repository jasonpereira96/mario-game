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