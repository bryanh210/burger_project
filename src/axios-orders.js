import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://react-my-burger-b9b60.firebaseio.com/'
});

export default instance;