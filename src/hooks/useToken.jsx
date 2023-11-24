import { useState } from "react";

const useToken = () => {
    const getToken = () => {
        return JSON.parse(localStorage.getItem('access_token'))
    }
    const [tokens, setToken] = useState(getToken());

    const saveToken = (token) => {
        localStorage.setItem('access_token', JSON.stringify(token))
        setToken(token)
    }
    return {
        tokens,
        setToken: saveToken
    }
}

export default useToken
