import * as actionTypes from '../../constants/actionTypes';


const initialState = {
    homebanners: [],
    state: 'idle',
    error: null,
};

const homebannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOMEBANNER:
            return {
                ...state,
                homebanners: action.payload,
            };
        case actionTypes.ADD_HOMEBANNER:
            return {
                ...state,
                homebanners: [...state.homebanners, action.payload],
            };
        default:
            return state;
    }
}

export default homebannerReducer;