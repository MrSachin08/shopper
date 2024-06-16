import { useState,useEffect } from "react";
import axios from "axios";

export default function useCategory(){
    const [categories,setCategories]=useState([]);

    //get Category

    const getCategories = async()=>{

        try{
            const{data}=await axios.get('/api/v1/category/get-category');
            setCategories(data?.category);

        }
        catch(e){
            console.log(e);
            
            
        }
    };

        useEffect(()=>{
            getCategories()
        },[]);

        return categories;
    }


