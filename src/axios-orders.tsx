import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-react-7cf39.firebaseio.com/'
});

export default instance;