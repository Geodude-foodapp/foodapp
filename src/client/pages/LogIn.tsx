import React from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../components/UserForm';

export default ({ logIn }: { logIn: () => void }) => {
  return (
    <section id='login'>
      <UserForm
        logIn={logIn}
        formMode='Log In'
      />
      <p>
        Need an account?{' '}
        <Link
          to='/signup'
          replace
        >
          Sign up
        </Link>
      </p>
    </section>
  );
};
