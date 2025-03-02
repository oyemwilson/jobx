import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT,  FETCH_USERS_REQUEST, FETCH_USERS_FAIL, FETCH_USERS_SUCCESS } from "../constants/UserConstants";
import { API_BASE_URL } from '../config/api'





export const loginrequest = () => ({
    type: LOGIN_REQUEST

})
export const loginsuccess = (userData) => ({
    type: LOGIN_SUCCESS,
    payload: userData
})
export const loginfailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
})

export const login = (credentials) => {
    return async (dispatch) => {
        dispatch(loginrequest())


        try {
            const response = await axios.post(`${API_BASE_URL}/api/users/login`, credentials)
            dispatch(loginsuccess(response.data))

            const { user, token } = response.data;

            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);


        }

        catch (error) {
            dispatch(loginfailure(error.response?.data?.error || 'login failure'))
        }
    }
}

export const logout = () => ({
    type: LOGOUT,
});

export const fetchUsers = (token) => {

    return async (dispatch) => {
        console.log("Fetching users...")
      dispatch({ type: FETCH_USERS_REQUEST});
      try {
        const response = await axios.get(`${API_BASE_URL}/api/users/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

        dispatch({ 
          type: FETCH_USERS_SUCCESS, 
          payload: response.data 
        });
      } catch (error) {
        dispatch({
          type: FETCH_USERS_FAIL,
          payload: error.response?.data?.error || "Login failure",
        });
      }
    };
  };
