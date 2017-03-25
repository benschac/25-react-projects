import fetch from 'isomorphic-fetch'

export const REQUEST_QUOTES = 'REQUEST_QUOTES';
export const RECEIVE_QUOTES = 'RECEIVE_QUOTES';


const requestQuotes = () => { type: REQUEST_QUOTES };

const receiveQuotes = (json) => {
    return {
        type: RECEIVE_QUOTES,
        quote: json.message,
        receivedAt: Date.now()
    }
}

const fetchQuotes = () => {
    return dispatch => {
        dispatch(requestQuotes())
        return fetch(`https://api.whatdoestrumpthink.com/api/v1/quotes/random`)
        .then(data => data.json())
        .then(json => dispatch(receiveQuotes(json)))
        .catch(err => console.error(err));
    }
}

const shouldFetchPosts = (state) => {
    const quote = state.quote;
    return !quote.length;
}









