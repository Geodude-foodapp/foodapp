import React, { useState } from 'react';
import axios from 'axios';
import UserForm from '../components/UserForm';
import { UserFormState } from '../../Types';

export default () => {
  return (
    <section id='login'>
      <UserForm formMode='Log In' />
    </section>
  );
};
