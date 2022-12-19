import * as actionTypes from '../../constants/actionTypes';


const initialState = {
    testimonials: [],
    state: 'idle',
    error: null,
};

const testimonialReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_TESTIMONIAL:
            return {
                ...state,
                testimonials: action.payload,
            };
        case actionTypes.ADD_TESTIMONIAL:
            return {
                ...state,
                testimonials: [...state.shops, action.payload],
            };
        default:
            return state;
    }
}

export default testimonialReducer;