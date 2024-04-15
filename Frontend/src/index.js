import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Route,RouterProvider, createRoutesFromElements, BrowserRouter } from 'react-router-dom';
import SignInPage from './SignInPage';
import Signup  from './Signup';
import Map from './E-facilites/Map';
import LocationComponent from './E-facilites/Map';

const router =createBrowserRouter([
  {
    path : "/",
    element : <App />,
  },
  { 
    path: "/signIn",
    element: <SignInPage/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/map",
    element: <Map/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <LocationComponent>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </LocationComponent>
  </BrowserRouter>
);

