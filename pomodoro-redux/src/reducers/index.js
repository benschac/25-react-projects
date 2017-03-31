import { START_TIMER, STOP_TIMER} from '../actions';

const timerReducer = (state = {
    time: 1800,
    start: false,
    stop: true,
    reset: false
}, action) => {
    let interval;
    switch(action.type) {
        case START_TIMER:
            console.log('fired');
            return {...state,
                start: true,
                stop:  false
            }
        case STOP_TIMER:
            return {
                ...state,
                start: false,
                stop: true
            }
    }
}



export default timerReducer;