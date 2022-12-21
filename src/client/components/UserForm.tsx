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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formData);
        }}
      >
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
            <div className='diet-checkboxes'>
              <legend>Select your diet:</legend>
              <input
                type='checkbox'
                name='diet'
                id='vegan'
                value='vegan'
              />
              <label htmlFor='vegan'>vegan</label>
              <input
                type='checkbox'
                name='diet'
                id='vegetarian'
                value='vegetarian'
              />
              <label htmlFor='vegetarian'>vegetarian</label>
              <input
                type='checkbox'
                name='diet'
                id='gluten free'
                value='gluten free'
              />
              <label htmlFor='gluten free'>gluten free</label>
            </div>
            <div className='intolerances-checkboxes'>
              <legend>Select your intolerances:</legend>
              <input
                type='checkbox'
                name='intolerances'
                id='dairy'
                value='dairy'
              />
              <label htmlFor='dairy'>dairy</label>
              <input
                type='checkbox'
                name='intolerances'
                id='eggs'
                value='eggs'
              />
              <label htmlFor='eggs'>eggs</label>
              <input
                type='checkbox'
                name='intolerances'
                id='gluten'
                value='gluten'
              />
              <label htmlFor='gluten'>gluten</label>
              <input
                type='checkbox'
                name='intolerances'
                id='grain'
                value='grain'
              />
              <label htmlFor='grain'>grain</label>
            </div>
          </>
        )}
        <button>Submit</button>
      </form>
    </section>
  );
};
