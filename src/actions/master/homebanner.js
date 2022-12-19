import { ADD_HOMEBANNER, GET_HOMEBANNER } from "../../constants/actionTypes";
import * as api from "../../api/index";

export const getHomebanners = () => async (dispatch) => {
    try {
        const { data } = await api.getHomebanner();
        dispatch({ type: GET_HOMEBANNER, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const addHomebanner = (homebanner) => async (dispatch) => {
    try {
        const { data } = await api.addHomebanner(homebanner);
        dispatch({ type: ADD_HOMEBANNER, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
