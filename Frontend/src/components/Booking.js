import React, { useState, useContext,useEffect } from 'react';
import Navbar from './navBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Booking = () => {
  const navigate =  useNavigate();
    
  const user =useSelector((store)=> store.user);    
 console.log("User: ",user);
  useEffect(()=>{
    if(user === null){
      console.log("Hello");
      navigate('/');
    }
    
  },[user]);
  
  var [wasteName,setWastname] =useState("")
  console.log("USER LOCATION ADRESS: ",user.userLocation.address);
  var [values, setValues] = useState({
    userId: user?user.id:null,
    factoryId: 0,
    status: "booked",
    wasteName: "",
    location: user? user.userLocation.address:"",
    phoneNo: "",
    modelName: "",
    name: user.user?user.user.name:""
  });
  console.log("Set Values: ",values.location);
 
  const handleSubmit = async () => {
    const response = await axios.post('http://localhost:3001/api/v1/booking', values);
    console.log("Response ", response);
  }

  return (
    <div className=''>
      <Navbar />
    <form onSubmit={handleSubmit} className="max-w-md mx-auto m-16 p-4">
        <div className="relative z-0 w-full mb-5 group">
          <input type='text' id='wasteName' value={values.wasteName}
            onChange={(e) => {setValues({ ...values, wasteName: e.target.value });
                              setWastname(e.target.value);
                              console.log("VALUSE: ",values.wasteName);
                              console.log("WASTE NAME ",wasteName);
                            }}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="wasteName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-Waste Name</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input id='modelName' type="text"
            onChange={(e) => setValues({ ...values, modelName: e.target.value })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="modelName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Model Name</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input id='location' type="text" value={values.location}
            onChange={(e) => setValues({ ...values, location: e.target.value })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="location" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input id='name' type="text" value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="tel" pattern="[0-9]{10}" 
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  );
}

export default Booking;
