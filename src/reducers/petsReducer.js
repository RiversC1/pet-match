import { FETCH_PETS, CREATE_PET } from '../actions/types';
import _ from 'lodash';

export default ( state = {}, action ) => {
    switch(action.type) {
        case FETCH_PETS:
            return { ...state, ..._.mapKeys(action.payload, 'Name') };
        case CREATE_PET:
            return { ...state, [action.payload.Owner]: action.payload };
        default:
            return state;
    }
};