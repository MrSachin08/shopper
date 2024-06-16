import { useEffect,useState } from "react";

import { useAuth } from "../../context/auth";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner";


export default function AdminRoute(){
    const[ok,setOk]=useState(false)
    const[auth,setAuth]=useAuth();
    useEffect(()=>{
        const authCheck=async()=>{
            const res=await axios.get('/api/v1/auth/admin-auth');
            if(res.data.ok){
                setOk(true);
            }
            else{
                setOk(false);
            }
        }

        // if we get auth and in it we get token we check by that

        if(auth?.token) authCheck();

    },[auth?.token]);

    return ok ? <Outlet/>:<Spinner path=""/>
}

//outlet is for nested routing