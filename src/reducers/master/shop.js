import * as actionTypes from '../../constants/actionTypes';


const initialState = {
    shops: [],
    state: 'idle',
    error: null,
};

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_SHOP:
            return {
                ...state,
                shops: action.payload,
            };
        case actionTypes.ADD_SHOP:
            return {
                ...state,
                shops: [...state.shops, action.payload],
            };
        default:
            return state;
    }
}

export default shopReducer;