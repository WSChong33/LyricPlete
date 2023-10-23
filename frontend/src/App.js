import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Home/Home';
import { Auth } from './components/Auth/Auth'

const App = () => {
  
  return (
    <div className="app">

      <NavBar/>

      <Routes>
        <Route path='/' element={<Home />} /> {/* Home page */}
        <Route path='/auth' element={<Auth />}/> {/* Login/Signup page */}
        {/* <Route path='leaderboard'></Route> // Leaderboard page */}
      </Routes>

    </div>
  );
}

export default App;
