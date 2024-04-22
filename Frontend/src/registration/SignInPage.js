import axios from "axios";
import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";

const SignInPage = () => {

    const [values, setValues] =useState({
        name: "",
        email : "",
        password: "",
        points: 0
    })
    // const [user,setUser] =useContext(UserContext);

    axios.defaults.withCredentials =true;

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        axios.post('http://localhost:3001/api/v1/signin',values)
        .then(res => {
            if(res.data.success == true){
                {console.log("Hello")}
                navigate('/signIn/home'); // Navigate to the root route
            } 
        } )
        .catch(
          err => {
            navigate('/signup'); // Navigate to the root route
            console.log("ERROR ",err)
          } );
    }

  return (
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input id="name" type="text" name="name" placeholder="Enter your name" 
          onChange = {e => {setValues({...values, name:e.target.value})
                           }}  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input id="email" type="email" name="email" autoComplete="off" placeholder="Enter your email"
           onChange = {e => setValues({...values, email:e.target.value})} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input id="password" type="password" name="password" autoComplete="off"
           onChange = {e => setValues({...values, password:e.target.value})} placeholder="Enter your password" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
      </form>
    </div>
  );
}

export default SignInPage;
