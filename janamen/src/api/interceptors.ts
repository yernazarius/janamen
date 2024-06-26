import axios, { type CreateAxiosDefaults } from 'axios';


const options: CreateAxiosDefaults = {
    baseURL: 'http://localhost:8000',
    withCredentials: true
};

const AxiosDefault = axios.create({
    ...options,
    headers: {
        'Content-Type': 'application/json'
    }
});



export { AxiosDefault };
