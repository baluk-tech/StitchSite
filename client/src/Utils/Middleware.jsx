import React from 'react'
import axios from 'axios';

    const instance = axios.create({
        baseURL: `${import.meta.env.VITE_API_URL}`
    });
    instance.interceptors.request.use((config)=>{
        if(localStorage.getItem("token"))
        config.headers.Authorization = "Bearer " + localStorage.getItem("token");
    return config
    })
export default instance;