import axios from 'axios';

export default axios.create({
    baseURL: 'https://petmatch-89822.firebaseio.com',
    headers: { 'Access-Control-Allow-Origin' : '*' }
});