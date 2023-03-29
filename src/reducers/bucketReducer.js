// bucketReducer.js
const initialState = {
    buckets: [],
    loading: false,
    error: null
};

const bucketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BUCKET':
            return {
                ...state,
                buckets: [...state.buckets, action.payload]
            };
        case 'DELETE_BUCKET':
            return {
                ...state,
                buckets: state.buckets.filter(bucket => bucket.id !== action.payload)
            };
        case 'EDIT_BUCKET':
            return {
                ...state,
                buckets: state.buckets.map(bucket => bucket.id === action.payload.id ? action.payload : bucket)
            };
        default:
            return state;
    }
};

export default bucketReducer;
