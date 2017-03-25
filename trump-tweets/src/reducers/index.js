import { REQUEST_QUOTES, RECEIVE_QUOTES } from './actions/';
import { combineReducers } from 'redux';

function quotes(state= {
    quote: ''
}, action) {
    switch(action.type) {
        case REQUEST_QUOTES:
            return {
                ...state,
                isFetching: true,
            }
        case RECEIVE_QUOTES:
            return {
                ...state,
                isFetching: false,
                quotes: action.quotes,
                lastUpdated: action.receivedAt
            }
        default:
            return state; 

    }
}


const rootReducer = combineReducers({
    quotes,
})

export default rootReducer;