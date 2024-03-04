import axios from "axios"

const makeApiRequest = (token) =>{
    const instance = axios.create({
        baseURL: `${import.meta.env.VITE_REACT_APP_URI}`,
        headers: {
            "Authorization" : `bearer ${token}`
        }
    })
    return instance;
}

export default makeApiRequest;