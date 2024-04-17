import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Routes,Route,BrowserRouter } from 'react-router-dom';
import SignInPage from './registration/SignInPage';
import Signup  from './registration/Signup';
import Map from './E-facilites/Map';
import Booking from './components/Booking';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signIN" element={<SignInPage />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/map" element={<Map />} />
        <Route path='/booking' element ={<Booking/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);