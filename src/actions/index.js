import { 
    SIGN_IN, 
    SIGN_OUT,
    FETCH_PETS
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

export const fetchPets = () => async (dispatch, { getFirebase, getFirestore }) => {
    const response = await petmatch.get('/Pets');

    dispatch({ type: FETCH_PETS, payload: response.data });
}