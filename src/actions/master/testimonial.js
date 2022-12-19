import { ADD_TESTIMONIAL, GET_TESTIMONIAL } from "../../constants/actionTypes";
import * as api from "../../api/index";

export const getTestimonials = () => async (dispatch) => {
    try {
        const { data } = await api.getTestimonial();
        dispatch({ type: GET_TESTIMONIAL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const addTestimonial = (testimonial) => async (dispatch) => {
    try {
        const { data } = await api.addTestimonial(testimonial);
        dispatch({ type: ADD_TESTIMONIAL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
