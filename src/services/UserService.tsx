import axios from 'axios';

// Base URL Endpoint
const API_BASE_URL = 'http://localhost:5145/api/user';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});

// Signup
export const signup = async (userData: { name: string; email: string; password: string }) => {
    try {
        const response = await api.post('/signup', userData);
        return response.data;
    } catch (error) { // Which error is being caught?
        throw error; // thrown to where?
    }
};

export default api;