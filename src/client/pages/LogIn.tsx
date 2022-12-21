import React from 'react';
import UserForm from '../components/UserForm';

export default () => {
  const logIn = () => {
    console.log('log in');
  };

  return (
    <section id='login'>
      <UserForm
        type='Log In'
        handleSubmit={logIn}
      />
    </section>
  );
};
