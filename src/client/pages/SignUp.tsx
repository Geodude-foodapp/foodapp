import React, { useState } from 'react';
import UserForm from '../components/UserForm';

export default () => {
  return (
    <section id='signup'>
      <UserForm formMode='Sign Up' />
    </section>
  );
};
