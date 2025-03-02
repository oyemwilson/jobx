import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from "../constants/UserConstants";

// const initialState = {
    
// };

export const userReducer = ( state = {isAuthenticated: false,
    user: null,
    token: null,
    loading: false,
    error: null}, action) => {
    switch(action.type){
        case LOGIN_REQUEST: 
        return {
            ...state,
            loading: true,
            error: null,
        }
        case LOGIN_SUCCESS: 
        return {
            ...state,
            isAuthenticated: true,
            user: action.payload,
            loading: false,
            error: null,
        }
        case LOGIN_FAILURE: 
        return {
            ...state,
            isAuthenticated: false,
            user: null,
            loading: false,
            error: action.payload,
        }
        case LOGOUT: 
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        return {
            ...state,
            isAuthenticated: false,
            user: null,
            loading: false,
            error: null,
        }
            case 'UPDATE_USER_DETAILS':
              return {
                ...state,
                user: {
                  ...state.user, // Preserve existing user data
                  ...action.payload, // Update with new data
                },
              };
        default: 
        return state
    }
}
export const fetchAllUsersReducer = (state = { users: [], loading: false, error: null }, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
        return{
                ...state,
                loading: true,
                error: null
        }
        case FETCH_USERS_SUCCESS:
        return{
            ...state,
            loading: false,
            users: action.payload,
            error: null

        }
        case FETCH_USERS_FAIL:
        return{
            ...state,
            loading: false,
            error: action.payload

        }
        default:
        return state
    }
}
// export default userReducer