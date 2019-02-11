import { FETCH_PETS } from '../actions/types';
import _ from 'lodash';

export default ( state = {}, action ) => {
    switch(action.type) {
        case FETCH_PETS:
            return { ...state, ..._.mapKeys(action.payload, 'Name') };
        default:
            return state;
    }
};