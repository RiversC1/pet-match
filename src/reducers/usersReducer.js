import { CREATE_USER } from '../actions/types';

export default ( state = {}, action ) => {
    switch(action.type) {
        case CREATE_USER: 
            return { ...state, [action.payload.Email]: action.payload };
        default:
            return state;
    }
}