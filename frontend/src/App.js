import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Home/Home';

const App = () => {
  return (
    <div className="app">

      <NavBar/>

      <Router>
        <Routes>
        <Route path='/' element={<Home />} /> {/* Home page */}
          {/* <Route path='auth' ></Route> // Login/Signup page
          <Route path='leaderboard'></Route> // Leaderboard page */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
