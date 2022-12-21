import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Settings from './pages/Settings';
import SignUp from './pages/SignUp';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import { UserData } from '../Types';
import { intoleranceObj } from './utils/dataObjects';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    intolerance: intoleranceObj,
    favorites: [],
  });

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
        <li>
          {' '}
          <NavLink to='/search'>Search</NavLink>{' '}
        </li>
        --------------------------------------------
      </ul>
      <Routes>
        <Route
          path='/'
          // element={isLoggedIn ? <Home /> : <SignUp />}
          element={<Home setUserData={(data: UserData) => setUserData(data)} />}
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
        <Route
          path='/search'
          element={<Search />}
        />
      </Routes>

      <Navbar />
    </>
  );
}
