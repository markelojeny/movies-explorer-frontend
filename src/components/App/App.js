import React from 'react';
import './App.css';
// import {Link} from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Error404 from '../Error404/Error404';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Profile from '../Auth/Profile/Profile';
import Register from '../Auth/Register/Register';
import Login from '../Auth/Login/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/error-404" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
