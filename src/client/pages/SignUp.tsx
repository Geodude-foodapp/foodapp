import React from 'react';
import axios from 'axios';
import UserForm from '../components/UserForm';
import { UserFormState } from '../../Types';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate()

  return (
    <section id='signup'>
      <UserForm
        type='Sign Up'
        handleSubmit={signUp}
      />
    </section>
  );
};
