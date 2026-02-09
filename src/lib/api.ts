import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.dwalt.net', // Replace with actual API URL or env var
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
