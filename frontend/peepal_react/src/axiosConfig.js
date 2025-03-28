import axios from 'axios';

// Set the base URL for your Laravel backend
axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers.common['Accept'] = 'application/json';

export default axios;