import React from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../components/UserForm';

export default () => {
  return (
    <section id='login'>
      <UserForm formMode='Log In' />
      <p>
        Need an account? <Link to='/signup'>Sign up</Link>
      </p>
    </section>
  );
};
