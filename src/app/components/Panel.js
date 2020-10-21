import React from 'react';
import { connect } from 'react-redux';

class Panel extends React.Component {
    render() {
        let { over, steps } = this.props;
        return <div id='panel'>
            <div><h2>Use the arrow keys to play. Collect all the sprites.</h2></div>
            <div id='steps'><h2>steps: {steps}</h2></div>
            <div id='game-over'><h1>{over ? 'Game Over' : ''}</h1></div>
        </div>;
    }
}

const mapStateToProps = state => {
    return {
        over: state.game.over,
        steps: state.steps
    };
}
export default connect(mapStateToProps)(Panel);