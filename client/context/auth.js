import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { SERVERURL } from '../config';


const AuthContext   =   createContext();

const AuthProvider = ({children}) =>{
    
    const [auth, setAuth] = useState({ user: null, token: '' });

    if(process.server){
        axios.defaults.baseURL = SERVERURL;
        axios.defaults.headers.common['Authorization'] = `Bearer ${auth?.token}`;
    }else{
        axios.defaults.baseURL = SERVERURL;
        axios.defaults.headers.common['Authorization'] = `Bearer ${auth?.token}`;
    }

    useEffect(()=>{
        if(localStorage.getItem('auth')){
            setAuth(JSON.parse(localStorage.getItem('auth')));
        }}, []);

    return(
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

export  { AuthProvider, AuthContext };
