import React from 'react';
import UserForm from '../components/UserForm';

export default () => {
  const signUp = () => {
    console.log('sign up');
  };
  return (
    <section id='signup'>
      <UserForm
        type='Sign Up'
        handleSubmit={signUp}
      />
    </section>
  );
};
