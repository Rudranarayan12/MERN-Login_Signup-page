import React from 'react';
import Signup from './component/Signup';
import Login from './component/Login';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
