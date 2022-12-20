import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Settings from './pages/Settings';
import SignUp from './pages/SignUp';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    // TODO: make fetch request to check if logged in
  }, []);

  return (
    <>
      <ul>
        Dev Toolbar
        <li>
          {' '}
          <NavLink to='/'>Home</NavLink>{' '}
        </li>
        <li>
          {' '}
          <NavLink to='/signup'>Sign Up</NavLink>{' '}
        </li>
        <li>
          {' '}
          <NavLink to='/login'>Log In</NavLink>{' '}
        </li>
        <li>
          {' '}
          <NavLink to='/settings'>Settings</NavLink>{' '}
        </li>
        --------------------------------------------
      </ul>
      <Routes>
        <Route
          path='/'
          // element={isLoggedIn ? <Home /> : <SignUp />}
          element={<Home />}
        />
        <Route
          path='/signup'
          element={<SignUp />}
        />
        <Route
          path='/login'
          element={<LogIn />}
        />
        <Route
          path='/settings'
          element={<Settings />}
        />
      </Routes>
    </>
  );
}
