import axios from 'axios';
import { ADD_TO_HISTORY } from './actionTypes';

// Action creators
export const addToHistory = (card) => ({
    type: ADD_TO_HISTORY,
    payload: card,
});

// Thunk action creators
export const fetchHistory = () => async (dispatch) => {
    try {
        const response = await axios.get('/history');
        dispatch({
            type: 'FETCH_HISTORY',
            payload: response.data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const addCardToHistory = (card) => async (dispatch) => {
    try {
        const response = await axios.post('/history', card);
        dispatch(addToHistory(response.data));
    } catch (error) {
        console.log(error);
    }
};
