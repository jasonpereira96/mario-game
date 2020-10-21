import React from 'react';
import { connect } from 'react-redux';
import { PLAYER, MUSHROOM, EMPTY, KEYS, DIRECTIONS } from './../constants/constants';
import { move } from './../actions/actions';

class Board extends React.Component {

    render() {
        let { length } = this.props;
        let me = this;
        let board = [];

        for (let rowIndex = 0; rowIndex < length; rowIndex++) {
            let row = [];
            for (let colIndex = 0; colIndex < length; colIndex++) {
                row.push(EMPTY);
            }
            board.push(row);
        }

        let locations = this.props.locations;

        for (let mushroomLocation of locations.mushrooms) {
            let { row, col, visible } = mushroomLocation;
            if (visible) {
                board[row][col] = MUSHROOM;
            }
        }
        let { row, col } = locations.player;
        board[row][col] = PLAYER;

        return board.map(function (row, index) {
            return (<div className='row' key={index}>
                {row.map(function (value, rowIndex) {
                    return <div className={me.getClassName(value)} key={rowIndex}></div>;
                })}
            </div>);
        });
    }
    componentDidMount() {
        let { move } = this.props;
        document.onkeydown = function (event) {
            switch (event.key) {
                case KEYS.UP: move(DIRECTIONS.UP); break;
                case KEYS.DOWN: move(DIRECTIONS.DOWN); break;
                case KEYS.LEFT: move(DIRECTIONS.LEFT); break;
                case KEYS.RIGHT: move(DIRECTIONS.RIGHT); break;
                default: break;
            }
        }
    }
    getClassName(value) {
        switch (value) {
            case PLAYER: return 'square player';
            case MUSHROOM: return 'square mushroom';
            default: return 'square';
        }
    }
}

const mapStateToProps = state => {
    return {
        locations: state.locations
    };
}
const mapDispatchToProps = dispatch => {
    return {
        move: direction => dispatch(move(direction))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);