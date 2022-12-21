import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <nav id='navbar'>
    {/* TODO: CHANGE TO ICONS */}
    <NavLink to='/search'>Search</NavLink>
    <NavLink to='/home'>Home</NavLink>
    <NavLink to='/settings'>Settings</NavLink>
  </nav>
);
