import './App.css';
import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar';

const App = () => {
  return (
    <div className="app">

      <NavBar/>

      {/* <Router>
        <Routes>
          <Route path='/' ></Route> // Home page
          <Route path='auth' ></Route> // Login/Signup page
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
