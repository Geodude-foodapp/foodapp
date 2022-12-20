import React from 'react';
import UserForm from '../components/UserForm';

export default () => {
  const signUp = () => {
    console.log('sign up');
  };
  return (
    <UserForm
      type='Sign Up'
      handleSubmit={signUp}
    />
  );
};
