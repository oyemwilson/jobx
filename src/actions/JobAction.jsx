import axios from "axios";
import { FETCH_JOBLIST_REQUEST, FETCH_JOBLIST_FAILURE, FETCH_JOBLIST_SUCCESS, JOB_DETAILS_REQUEST, JOB_DETAILS_SUCCESS, JOB_DETAILS_FAILURE, USER_JOB_POSTED_REQUEST, USER_JOB_POSTED_SUCCESS, USER_JOB_POSTED_FAILURE,  } from "../constants/JobConstants";
import { API_BASE_URL } from '../config/api'
import { type } from "@testing-library/user-event/dist/type";

export const fetchJobs = () => async (dispatch) => {
    try{
        dispatch({type: FETCH_JOBLIST_REQUEST})
        const {data} = await axios.get(`${API_BASE_URL}/api/joblistings/all`)
        dispatch({
            type: FETCH_JOBLIST_SUCCESS,
            payload: data
        });
    }
    catch (error) {

        dispatch({
            type: FETCH_JOBLIST_FAILURE,
            payload: error.response?.data?.message || error.message,
        })
            
    }
}
export const setCurrentPage = (page) => ({
    type: "SET_CURRENT_PAGE",
    payload: page
})


export const fetchUserJobs = (token) => async (dispatch) => {
    try {
        dispatch({ type: USER_JOB_POSTED_REQUEST });

        if (!token) throw new Error("Token is missing"); // Debugging step

        const config = {
            headers: {
                Authorization: `Bearer ${token}`, // Attach token to request
            },
        };

        const { data } = await axios.get(`${API_BASE_URL}/api/joblistings/user`, config);

        dispatch({ type: USER_JOB_POSTED_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: USER_JOB_POSTED_FAILURE,
            payload: error.response?.data?.message || error.message,
        });
    }
};
export const setSelectedJob = (job) => ({
    type: "SET_SELECTED_JOB",
    payload: job,
});