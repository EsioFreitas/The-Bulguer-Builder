import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-9364b.firebaseio.com/'
});

export default instance;