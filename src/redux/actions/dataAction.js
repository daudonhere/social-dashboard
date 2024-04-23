import axios from 'axios';
import { API_ENDPOINT } from '../../api';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';


export const getData = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_DATA_REQUEST });
        try {
            const response = await axios.get(API_ENDPOINT);
                dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
            return response.data;
            } catch (error) {
                dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
            throw error;
        }
    };
};
