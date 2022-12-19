import { ADD_COURSE, GET_COURSE } from "../../constants/actionTypes";
import * as api from "../../api/index";

export const getCourses = () => async (dispatch) => {
    try {
        const { data } = await api.getCourse();
        dispatch({ type: GET_COURSE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const addCourse = (course) => async (dispatch) => {
    try {
        const { data } = await api.addCourse(course);
        dispatch({ type: ADD_COURSE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
