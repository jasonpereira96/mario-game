function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export function generateLocations(boardLength) {
    const LIMIT = boardLength ** 2;
    let set = new Set();

    while (set.size < boardLength + 1) {
        let number = getRandomInt(LIMIT);
        set.add(number);
    }

    let locations = Array.from(set.values()).map(value => {
        return {
            row: Math.floor(value / boardLength),
            col: value % boardLength
        };
    });
    let result = {
        mushrooms: [],
        player: null
    };
    let closest = closestToCenter(locations, boardLength);
    result.player = closest;

    for (let location of locations) {
        if (closest !== location) {
            result.mushrooms.push(location);
        }
    }
    return result;
}

function closestToCenter(locations, boardLength) {
    let center = {
        row: Math.floor(boardLength / 2),
        col: Math.floor(boardLength / 2)
    };
    let closest;
    let minDistance = Infinity;

    for (let location of locations) {
        let currentDistance = distance(location, center);
        if (currentDistance < minDistance) {
            minDistance = currentDistance;
            closest = location;
        }
    }
    return closest;
}

function distance(locationA, locationB) {
    return (locationB.col - locationA.col) ** 2 + (locationB.row - locationA.row) ** 2;
}