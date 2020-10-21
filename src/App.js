import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { init } from './app/actions/actions';
import Panel from './app/components/Panel';
import Board from './app/components/Board';

class App extends React.Component {
    render() {
        let { initialized, length } = this.props;
        return (
            <div className="App">
                {initialized ? <Board length={length} /> : <div />}
                <Panel />
            </div>
        );
    }
    componentDidMount() {
        let input = prompt('Enter board length: ');
        var length = Number.parseInt(input);
        if (!Number.isNaN(length)) {
            if (length < 3) {
                alert('Length too small');
                window.location.reload();
            } else if (length > 20) {
                alert('Length too big');
                window.location.reload();
            } else {
                this.props.init(length);
            } 
        } else {
            alert('Enter a valid number.');
            window.location.reload();
        }
    }
}
const mapStateToProps = state => {
    let { initialized, length } = state.board;
    return {
        initialized,
        length
    };
}
const mapDispatchToProps = dispatch => {
    return {
        init: boardLength => dispatch(init(boardLength))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
