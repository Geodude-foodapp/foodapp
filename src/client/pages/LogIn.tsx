import React from 'react';
import axios from 'axios';
import UserForm from '../components/UserForm';
import { UserFormState } from '../../Types';
import { useNavigate } from 'react-router-dom';

export default () => {
  const logIn = (formData: UserFormState) => {
    axios
      .post('/api/login', formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const navigate = useNavigate()

  return (
    <section id='login'>
      <UserForm
        type='Log In'
        handleSubmit={logIn}
      />
    </section>
  );
};
