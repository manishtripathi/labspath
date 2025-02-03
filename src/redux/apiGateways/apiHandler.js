import axios from "axios";
import store from "../store";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const VERSION = import.meta.env.VITE_VERSION;
const api = axios.create({
    baseURL: `${BASE_URL}/${VERSION}`,

})

api.interceptors.request.use((config)=>{
    const token = store.getState().auth.token;
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
}
)

api.interceptors.response.use(
    (response)=>response,
    (error) =>{
        return Promise.reject(error);
    }
    )

export const PostGateway = (url, data, config) =>{
    return api.post(url, data, config)
}
export const PutGateway = (url, data, config) =>{
    return api.put(url, data, config)
}
export const GetGateway = (url, params,queryObj, config) =>{
    const queryString = queryObj ? new URLSearchParams(queryObj).toString() : "";
    const paramString = params ? (Array.isArray(params) ? params?.map((item)=>"/"+item) : "/"+params) : "";
    const targetUrl = `${url}${params}?${queryString}`
    return api.get(`${targetUrl}/params`, config)
}

export default api;