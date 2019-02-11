import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import petsReducer from './petsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    pets: petsReducer,
    users: usersReducer
});