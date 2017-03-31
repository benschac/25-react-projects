import { connect } from 'react-redux';  
import App from '../components/App';
import {startClock, stopClock } from '../actions';

function mapStateToProps(state) {
    return { clock: state }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        startClock: () => {
            dispatch(startClock())
        }
    }
}

const VisibleClock = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)


export default VisibleClock;