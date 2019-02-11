import { 
    SIGN_IN, 
    SIGN_OUT,
    FETCH_PETS,
    CREATE_USER
} from './types';

import petmatch from '../api/petmatch';

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const fetchPets = () => async dispatch => {
    const response = await petmatch.get('/Pets.json');

    dispatch({ type: FETCH_PETS, payload: response.data });
}

export const createUser = formValues => async dispatch => {
    const response = await petmatch.post('/Users.json', { ...formValues });
    
    dispatch({ type: CREATE_USER, payload: response.data });
    alert('user registered correctly');
}



