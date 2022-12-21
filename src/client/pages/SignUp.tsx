import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../components/UserForm';

export default ({ logIn }: { logIn: () => void }) => {
  return (
    <section id='signup'>
      <UserForm
        logIn={logIn}
        formMode='Sign Up'
      />
      <p id='signup-prompt'>
        Already have an account?{' '}
        <Link
          to='/login'
          replace
        >
          Log in
        </Link>{' '}
      </p>
    </section>
  );
};
