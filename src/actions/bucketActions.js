import axios from 'axios';
import { ADD_BUCKET, DELETE_BUCKET, EDIT_BUCKET } from './actionTypes';

// Action creators
export const addBucket = (bucket) => ({
    type: ADD_BUCKET,
    payload: bucket,
});

export const deleteBucket = (bucketId) => ({
    type: DELETE_BUCKET,
    payload: bucketId,
});

export const editBucket = (bucketId, updatedBucket) => ({
    type: EDIT_BUCKET,
    payload: { bucketId, updatedBucket },
});

// Thunk action creators
export const fetchBuckets = () => async (dispatch) => {
    try {
        const response = await axios.get('/buckets');
        dispatch({
            type: 'FETCH_BUCKETS',
            payload: response.data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const createBucket = (bucket) => async (dispatch) => {
    try {
        const response = await axios.post('/buckets', bucket);
        dispatch(addBucket(response.data));
    } catch (error) {
        console.log(error);
    }
};

export const removeBucket = (bucketId) => async (dispatch) => {
    try {
        await axios.delete(`/buckets/${bucketId}`);
        dispatch(deleteBucket(bucketId));
    } catch (error) {
        console.log(error);
    }
};

export const updateBucket = (bucketId, updatedBucket) => async (dispatch) => {
    try {
        const response = await axios.put(`/buckets/${bucketId}`, updatedBucket);
        dispatch(editBucket(bucketId, response.data));
    } catch (error) {
        console.log(error);
    }
};
