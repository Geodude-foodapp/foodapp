import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../components/UserForm';

export default () => {
  return (
    <section id='signup'>
      <UserForm formMode='Sign Up' />
      <p id='signup-prompt'>
        Already have an account? <Link to='/login'>Log in</Link>{' '}
      </p>
    </section>
  );
};
