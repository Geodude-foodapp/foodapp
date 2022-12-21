import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import UserForm from '../components/UserForm';
import { Intolerance, UserFormState, BackendUserFormState } from '../../Types';

export default () => {
  const [signUpFailed, setSignUpFailed] = useState(false);
  const navigate = useNavigate();

  const signUp = (formData: UserFormState) => {
    // Stringify intolerances to facilitate working with current SQL setup
    const intoleranceString = Object.values(formData.intolerance).join(',');
    const backendFormData: BackendUserFormState = {
      ...formData,
      intolerance: intoleranceString,
    };

    axios
      .post('/api/signup', backendFormData)
      .then(({ data }) => {
        if (!data.auth) return setSignUpFailed(true);
        else navigate('/');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section id='signup'>
      <UserForm formMode='Sign Up' />
    </section>
  );
};
