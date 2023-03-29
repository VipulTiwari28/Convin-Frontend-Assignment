// cardReducer.js
const initialState = {
    cards: [],
    loading: false,
    error: null
};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return {
                ...state,
                cards: [...state.cards, action.payload]
            };
        case 'DELETE_CARD':
            return {
                ...state,
                cards: state.cards.filter(card => card.id !== action.payload)
            };
        case 'EDIT_CARD':
            return {
                ...state,
                cards: state.cards.map(card => card.id === action.payload.id ? action.payload : card)
            };
        case 'MOVE_CARD':
            return {
                ...state,
                cards: state.cards.map(card => card.id === action.payload.cardId ? { ...card, bucketId: action.payload.bucketId } : card)
            };
        default:
            return state;
    }
};

export default cardReducer;
