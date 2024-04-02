
import './App.css';
import SignInPage from './SignInPage';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  var [auth, setAuth] =useState(false);
  var [name,setName] =useState("");
  
  useEffect( ()=> {
    axios.get('http://localhost:3001/api/v1/isAuthenticated')
    .then(
      res => {
        if(res.data.success){
          setAuth(true);
          console.log(" Name:- ",res.data.data);
          setName(res.data.data);
        }
        else{
          setAuth(false);
        }
      }
    )
    .catch(err => {
      console.error('Error fetching authentication status:', err);
    });
  },[])

  return (
    auth? (<div className="App">
    <h1 className='text-2xl'>
      HOME PAGE
    </h1>
    <h2>Name: {name} </h2>
  </div>):(
    <div>
      <h1>Home Page</h1>
      <h1>Not Authenticated</h1>
    </div>
  )
  );
}

export default App;
