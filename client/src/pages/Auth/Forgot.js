import React,{useState} from 'react'
import Layout from '../../components/layout/Layout'

import axios from "axios"
import toast from "react-hot-toast"


import { useNavigate } from 'react-router-dom';
//question=answer
const Forgot = () => {
    const [email,setEmail]=useState("");
    const [newpassword,setNewPasssword]=useState("");
    const [question,setQuestion]=useState("");
   
   
    const navigate=useNavigate();
 

    const handleSubmit= async (e)  =>{
        
        e.preventDefault();
     

        try{
            const res =await axios.post("/api/v1/auth/forgot-password",
            {email,newpassword,question}
            );
            if(res.data.success){
              toast.success(res.data && res.data.message);
                navigate("/login");

            }
            else{
                toast.error(res.data.message);
            }
        }
        catch(error){ 
            console.log(error);
            toast.error("something went wrong");
        }
    };




  return (

    <Layout title={"forgot Password -E commerce"}>
      <div className="register">
    <h1>Reset password Page</h1>
    <form onSubmit={handleSubmit}>
   
      <div className="mb-3">
 
        <input
        type="Email"
        className="form-control"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        id="exampleInputEmail"
        placeholder="Enter your email"
        required


        />

        </div>


        <div className="mb-3">
 
        <input
        type="text"
        className="form-control"
        value={question}
        onChange={(e)=>setQuestion(e.target.value)}
        id="exampleInputQuestion"
        placeholder="Enter your secret answer"
        required


        />

        </div>
        <div className="mb-3">
        
        <input
        type="password"
        className="form-control"
        value={newpassword}
        onChange={(e)=>setNewPasssword(e.target.value)}
        id="exampleInputPassword"
        placeholder="Enter your new  password"
        required



        />
        </div>


       
       
        <button type="submit" className="btn btn-primary">
    REset
  </button>



    </form>

    </div>
    </Layout>
  )
}

export default Forgot