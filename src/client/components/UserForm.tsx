import React, { useState } from 'react';
import { UserFormState } from '../../Types';

type UserFormProps = {
  type: 'Sign Up' | 'Log In';
  handleSubmit: () => void;
};

export default ({ type, handleSubmit }: UserFormProps) => {
  const initialFormState: UserFormState = {
    username: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormState);

  return (
    <>
      <h2>{`${type} Form`}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='username'
          value={formData.username}
          onChange={(e) =>
            setFormData((state) => ({ ...state, username: e.target.value }))
          }
        />
        <input
          type='password'
          placeholder='password'
          value={formData.password}
          onChange={(e) =>
            setFormData((state) => ({ ...state, password: e.target.value }))
          }
        />
        <button>Submit</button>
      </form>
    </>
  );
};
