import { 
    SIGN_IN, 
    SIGN_OUT,
    FETCH_PETS,
    CREATE_USER,
    CREATE_PET,
    FETCH_PET,
    EDIT_PET,
    DELETE_PET
} from './types';
import history from '../history';
import petmatch from '../api/petmatch';
import { storage } from 'firebase/app';

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

export const fetchPets = () => async (dispatch, getState) => {
    const response = await petmatch.get('/Pets.json');

    dispatch({ type: FETCH_PETS, payload: response.data });

    console.log(getState());
}

export const createPet = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const Owner = userId;
    const Photo = () => {
        storage.ref('/images').child(`${new Date().getTime()}`).getDownloadURLs().then(url => {
            console.log(url);
        });
    }

    const response = await petmatch.post('/Pets.json', { ...formValues, Owner, Photo }); 

    dispatch({ type: CREATE_PET, payload: response.data });
    history.push('/');
}

export const fetchPet = id => async dispatch => {
    const response = await petmatch.get(`/Pets/${id}.json`)

    dispatch({ type: FETCH_PET, payload: response.data });
}

export const editPet = (id, formValues) => async dispatch => {
    const response = await petmatch.patch(`/Pets/${id}.json`, formValues);

    dispatch({ type: EDIT_PET, payload: response.data });
    history.push('/');
}

export const deletePet = id => async dispatch => {
    await petmatch.delete(`/Pets/${id}.json`);

    dispatch({ type: DELETE_PET, payload: id });
    history.push('/');
}

export const createUser = formValues => async dispatch => {
    const response = await petmatch.post('/Users.json', { ...formValues });
    
    dispatch({ type: CREATE_USER, payload: response.data });
    history.push('/');
}


