import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Settings from './pages/Settings';
import SignUp from './pages/SignUp';
import Search from './pages/Search';
import { UserData, RecipeData } from '../Types';
import { intoleranceObj } from './utils/dataObjects';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    intolerance: intoleranceObj,
    favorites: [],
  });

  // TODO: ADD ENDPOINT TO CHECK IF SESSION EXISTS AND, IF SO, REDIRECT TO HOME PAGE
  // useEffect(() => {
  //   axios.get('')
  // }, []);

  function logIn(): void {
    setIsLoggedIn(true);
    axios
      .get('/api/favorites')
      .then(({ data }) => {
        const parsedFavorites: RecipeData[] = data.favorites.map(
          (recipe: any) => {
            const { id, title, image, sourceUrl } = recipe;
            return { id, title, image, sourceUrl };
          }
        );

        const newUserData: UserData = {
          ...data,
          favorites: parsedFavorites,
        };
        setUserData(newUserData);
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <ul>
        <div className='dev-toolbar'>
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
        </div>
      </ul>
      <Routes>
        {!isLoggedIn && (
          <Route
            path='/'
            element={<LogIn logIn={() => setIsLoggedIn(true)} />}
          />
        )}
        <Route
          path='/'
          // element={isLoggedIn ? <Home /> : <SignUp />}
          element={<Home userData={userData} />}
        />
        <Route
          path='/signup'
          element={<SignUp logIn={() => setIsLoggedIn(true)} />}
        />
        <Route
          path='/login'
          element={<LogIn logIn={logIn} />}
        />
        <Route
          path='/settings'
          element={<Settings setUserData={(data: UserData) => setUserData(data)} />}
        />
        <Route
          path='/search'
          element={<Search userData={userData} />}
        />
      </Routes>
    </>
  );
}
