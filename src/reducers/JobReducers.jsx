import { FETCH_JOBLIST_REQUEST, FETCH_JOBLIST_SUCCESS, FETCH_JOBLIST_FAILURE, USER_JOB_POSTED_REQUEST, USER_JOB_POSTED_SUCCESS, USER_JOB_POSTED_FAILURE, } from "../constants/JobConstants";

// const initialState = {
//     jobs: [],
//     loading: false, 
//     error: null,
//     currentPage: 1,
//     jobsPerPage: 8
// }

export const fetchJobsReducer = (state = {
    jobs: [], loading: false,
    error: null,
    currentPage: 1,
    jobsPerPage: 8
}, action) => {
    switch (action.type) {
        case FETCH_JOBLIST_REQUEST:
            return { ...state, loading: true };
        case FETCH_JOBLIST_SUCCESS:
            return { ...state, loading: false, jobs: action.payload, }
        case FETCH_JOBLIST_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.payload };
        default: return state
    }
}

export const fetchUserJobsReducer = (state = {  userJobs: []
    loading: false,
    error: null,
    selectedJob: null,}, action) => {
    switch (action.type) {
        case USER_JOB_POSTED_REQUEST:
            return { ...state, loading: true };
        case USER_JOB_POSTED_SUCCESS:
            return { ...state, loading: false, userJobs: action.payload };
        case USER_JOB_POSTED_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case "SET_SELECTED_JOB":
            return { ...state, selectedJob: action.payload };
        default:
            return state;
    }
};

