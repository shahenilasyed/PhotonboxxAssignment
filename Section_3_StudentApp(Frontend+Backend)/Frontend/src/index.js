import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Form from './components/Form'
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Update from './components/Update';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="Dashboard" element={<Dashboard/>}/> 
      <Route path="Update" element={<Update/>}/> 
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
