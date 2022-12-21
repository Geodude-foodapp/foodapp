import React from 'react';
import axios from 'axios';
import UserForm from '../components/UserForm';
import { UserFormState } from '../../Types';

export default () => {
  const signUp = (formData: UserFormState) => {
    axios
      .post('/api/signup', formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
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
