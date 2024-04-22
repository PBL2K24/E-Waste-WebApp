import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useContext, useEffect, useState } from 'react';
import UserContext from '../utils/UserContext';
import SignInPage from '../registration/SignInPage';

export const HomePage = () => {
    var [auth, setAuth] =useState(false);
    var [name,setName] =useState("");
    var [userId,setUserId] = useState(-1);
    var [email, setEmail] =useState("");
    var  {user,setUser} = useContext(UserContext);

  useEffect( ()=> {
    axios.get('http://localhost:3001/api/v1/isAuthenticated')
    .then(
      res => {
        if(res.data.success){
          setAuth(true);
          setName(res.data.data.name);
          setUser({name:res.data.data.name, id:res.data.data.id,email:res.data.data.email,points:0})
          setUserId(res.data.data.id);
          setEmail(res.data.data.email);
        }
        else{
          console.log("EXCECUTING PASSWORD FAILED")
          setAuth(false);
        }
      }
    )
    .catch(err => {
      setAuth(false);
      console.error('Error fetching authentication status:', err);
    });
  },[])
  
  return (
    <>
       <div className="bg-cover bg-center bg-no-repeat bg-fixed bg-custom overflow-hidden "> 
            <div className="flex flex-col h-[100%] justify-center items-center text-center bg-black bg-opacity-50">
                <h1 className="text-4xl text-purple-400 mb-8">Welcome to E-WASTE Locator</h1>
                <Link to={'/map'}> <button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Search For Nearby Facilites</button></Link>
                <Link to={'/booking'}><button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Booked Now</button></Link> 
            </div>
        </div> 
    </>
  )
}
