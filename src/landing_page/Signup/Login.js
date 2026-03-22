import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handlelogin=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3002/login',{
            email,password
        }).then((res)=>{
            alert("Login successful");
            window.location.href='http://localhost:3000';
        }).catch((e)=>{
            console.log("error");
        })
    }
    return(
        <div className="container">
      <form onSubmit={handlelogin} className="mt-5">
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    
    </div>
    );
}
export default Login;