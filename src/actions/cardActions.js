import axios from 'axios';
import {
    ADD_CARD,
    DELETE_CARD,
    EDIT_CARD,
    MOVE_CARD,
    DELETE_CARDS_BY_BUCKET_ID,
} from './actionTypes';

// Action creators
export const addCard = (bucketId, card) => ({
    type: ADD_CARD,
    payload: { bucketId, card },
});

export const deleteCard = (bucketId, cardId) => ({
    type: DELETE_CARD,
    payload: { bucketId, cardId },
});

export const editCard = (bucketId, cardId, updatedCard) => ({
    type: EDIT_CARD,
    payload: { bucketId, cardId, updatedCard },
});

export const moveCard = (sourceBucketId, destinationBucketId, cardId) => ({
    type: MOVE_CARD,
    payload: { sourceBucketId, destinationBucketId, cardId },
});

export const deleteCardsByBucketIdAction = (bucketId) => ({
    type: DELETE_CARDS_BY_BUCKET_ID,
    payload: bucketId,
});

// Thunk action creators
export const fetchCards = () => async (dispatch) => {
    try {
        const response = await axios.get('/cards');
        dispatch({
            type: 'FETCH_CARDS',
            payload: response.data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const createCard = (bucketId, card) => async (dispatch) => {
    try {
        const response = await axios.post(`/buckets/${bucketId}/cards`, card);
        dispatch(addCard(bucketId, response.data));
    } catch (error) {
        console.log(error);
    }
};

export const removeCard = (bucketId, cardId) => async (dispatch) => {
    try {
        await axios.delete(`/buckets/${bucketId}/cards/${cardId}`);
        dispatch(deleteCard(bucketId, cardId));
    } catch (error) {
        console.log(error);
    }
};

export const updateCard = (bucketId, cardId, updatedCard) => async (dispatch) => {
    try {
        const response = await axios.put(`/buckets/${bucketId}/cards/${cardId}`, updatedCard);
        dispatch(editCard(bucketId, cardId, response.data));
    } catch (error) {
        console.log(error);
    }
};

export const moveCardToBucket = (sourceBucketId, destinationBucketId, cardId) => async (dispatch) => {
    try {
        const response = await axios.put(`/buckets/${sourceBucketId}/cards/${cardId}`, { bucketId: destinationBucketId });
        dispatch(moveCard(sourceBucketId, destinationBucketId, cardId));
    } catch (error) {
        console.log(error);
    }
};

export const deleteCardsByBucketId = (bucketId) => async (dispatch) => {
    try {
        await axios.delete(`/buckets/${bucketId}/cards`);
        dispatch(deleteCardsByBucketIdAction(bucketId));
    } catch (error) {
        console.log(error);
    }
};
