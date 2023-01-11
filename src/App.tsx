import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hiremepage from './Body/Hiremepage';
import Profile from './Body/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile" element={<Hiremepage />} />
      </Routes>
    </>
  );
}

export default App;
