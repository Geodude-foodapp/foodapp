import React, { useState } from 'react';
import { UserFormState } from '../../Types';
import { useNavigate } from 'react-router-dom';

type UserFormProps = {
  type: 'Sign Up' | 'Log In';
  handleSubmit: () => void;
};

export default ({ type, handleSubmit }: UserFormProps) => {
  const initialFormState: UserFormState = {
    name: '',
    password: '',
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormState);

  return (
    <section id='user-form'>
      <h2>{`${type} Form`}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='username'
          value={formData.name}
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
        {type === 'Sign Up' && (
          <>
            <legend>Select your diet:</legend>
            <div>
              <input
                type='checkbox'
                name='vegan'
              ></input>
            </div>
          </>
        )}
        <button>Submit</button>
      </form>
    </section>
  );
};
