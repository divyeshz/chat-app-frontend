import axios from 'axios';
const axiosIns = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {
        // Accept: "application/json",
    },
});

axiosIns.interceptors.request.use(config => {
    // Retrieve token from localStorage
    const token = localStorage.getItem('accessToken')

    // If token is found
    if (token) {

        config.headers = config.headers || {}

        config.headers.Authorization = token ? `Bearer ${localStorage.getItem('accessToken')}` : ''
    }

    return config
})

export default axiosIns
