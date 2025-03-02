import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './reducers/UserReducer';
// import fetchJobsReducer from './reducers/JobReducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { fetchAllUsersReducer, userReducer } from './reducers/UserReducer';
import { fetchJobsReducer, fetchUserJobsReducer } from './reducers/JobReducers';

// Combine all reducers
const rootReducer = combineReducers({
  user: userReducer,
  jobs: fetchJobsReducer,
  userJobs: fetchUserJobsReducer,
  fetchUsers: fetchAllUsersReducer
});

const persistConfig = {
  key: 'root',
  storage,
  // Optionally, you can whitelist specific reducers to persist
  // whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      }
    })
    
});

export const persistor = persistStore(store);
export default store;