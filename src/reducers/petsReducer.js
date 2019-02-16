import { FETCH_PETS, CREATE_PET, FETCH_PET, EDIT_PET, DELETE_PET } from '../actions/types';
import _ from 'lodash';

export default ( state = {}, action ) => {
    switch(action.type) {
        case FETCH_PETS:
            return { ...state, ..._.mapKeys(action.payload, 'Name') };
        case CREATE_PET:
            return { ...state, ...action.payload };
        case FETCH_PET:
            return { ...state, ...action.payload };
        case EDIT_PET: 
            return { ...state, ...action.payload };
        case DELETE_PET:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};