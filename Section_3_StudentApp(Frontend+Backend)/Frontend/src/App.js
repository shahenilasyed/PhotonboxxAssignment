import React, { StrictMode } from 'react';

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Navbar from './components/Navbar';
import{ BrowserRouter as Routes, Route,Switch} from 'react-router-dom'
import Form from './components/Form';
import Home from './components/Home';
// import Dashboard from './components/Dashboard';


function App() {
 
  return (
    <Form />
  );
}

export default App;
