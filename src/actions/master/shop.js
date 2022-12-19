import { ADD_SHOP, GET_SHOP } from "../../constants/actionTypes";
import * as api from "../../api/index";

export const getShops = () => async (dispatch) => {
    try {
        const { data } = await api.getShop();
        dispatch({ type: GET_SHOP, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const addShop = (shop) => async (dispatch) => {
    try {
        const { data } = await api.addShop(shop);
        dispatch({ type: ADD_SHOP, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
