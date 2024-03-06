import axios from 'axios';
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from '../constant/constant';

export const fetchSearchResults = (data) => {
    return async (dispatch) => {
        dispatch({ type: SEARCH_REQUEST });
        // console.log(data)
        // console.log(keyword)
        try {
            const response = await axios.get(`http://localhost:8000/api/auth/search?search=${data}`)
            // .then((response) => response.json())
            // .then((json) => {
            // console.log(json);
            // });
            console.log(data)
            // dispatch(setSearchResults(response.data.data));
            dispatch({
                type: SEARCH_SUCCESS,
                payload: response.data

            })
            console.log(response.data)
        } catch (error) {
            dispatch({
                type: SEARCH_FAILURE,
                error: error.message
            })
        }
    };
};
