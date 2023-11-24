import axios from "axios"

const baseURL = import.meta.env.VITE_BACKEND
export const client = axios.create({ baseURL })

client.interceptors.request.use(
    (config) => {
        const token = JSON.parse(localStorage.getItem('access_token'))
        if (token?.accessToken) {
            config.headers.Authorization = `Bearer ${token?.accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
client.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If the error status is 401 and there is no originalRequest._retry flag,
        // it means the token has expired and we need to refresh it
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = JSON.parse(localStorage.getItem('access_token'))?.refreshToken;
                const response = await axios.post('/auth/refresh', { refreshToken });
                const { access_token } = response.data;

                localStorage.setItem('access_token', access_token);

                // Retry the original request with the new token
                originalRequest.headers.Authorization = `Bearer ${access_token}`;
                return axios(originalRequest);
            } catch (error) {
                // Handle refresh token error or redirect to login
                localStorage.clear()
                window.location.href = '/signin'
            }
        }

        return Promise.reject(error);
    }
);

const signUpHandler = async (formData) => {
    const response = await client.post("/auth/register", formData)
    return response
}

const signInHandler = async (formData) => {
    const response = await client.post("/auth/login", formData)
    return response
}

export {
    signUpHandler,
    signInHandler,

}
