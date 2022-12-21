import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { UserFormState, BackendUserFormState } from '../../Types';
import { dietArr, intoleranceArr } from '../utils/dataObjects';
import { intoleranceObj } from '../utils/dataObjects';

type UserFormProps = {
  formMode: 'Sign Up' | 'Log In';
};

export default ({ formMode }: UserFormProps) => {
  const initialFormState: UserFormState = {
    name: "",
    password: "",
    intolerance: intoleranceObj,
  };
  const [formData, setFormData] = useState(initialFormState);
  const [attemptFailed, setAttemptFailed] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(formData: UserFormState): void {
    const endpoint = formMode === 'Log In' ? 'login' : 'signup';

    // Stringify intolerances to facilitate working with current SQL setup
    let signUpData;
    if (formMode === 'Sign Up') {
      const intoleranceString = Object.entries(formData.intolerance)
        .filter((entry) => entry[1])
        .map((entry) => entry[0])
        .join(',');

      signUpData = {
        ...formData,
        intolerance: intoleranceString,
      } as BackendUserFormState;
    }

    const postData = formMode === 'Log In' ? formData : signUpData;
    axios
      .post(`/api/${endpoint}`, postData)
      .then(({ data }) => {
        if (!data.auth) return setAttemptFailed(true);
        else navigate('/');
      })
      .catch((err) => {
        console.error(err);
      });
  }
  // If formMode is Log In, don't waste time populating dietInputs and intoleranceInputs
  let dietInputs, intoleranceInputs;
  if (formMode === 'Sign Up') {
    dietInputs = dietArr.map((diet) => (
      <div key={`${diet}-container`}>
        <input
          type="checkbox"
          key={diet}
          name={diet}
          id={`${diet}-diet`}
          value={diet}
          checked={formData.diet === diet}
          onChange={() => setFormData((state) => ({ ...state, diet }))}
        />
        <label key={`${diet}-label`} htmlFor={`${diet}-diet`}>
          {diet}
        </label>
      </div>
    ));

    intoleranceInputs = intoleranceArr.map((intol) => (
      <div key={`${intol}-container`}>
        <input
          type="checkbox"
          key={intol}
          name={intol}
          id={intol}
          value={intol}
          checked={formData.intolerance[intol]}
          onChange={() =>
            setFormData((state) => ({
              ...state,
              intolerance: {
                ...state.intolerance,
                [intol]: !state.intolerance[intol],
              },
            }))
          }
        />
        <label key={`${intol}-label`} htmlFor={intol}>
          {intol}
        </label>
      </div>
    ));
  }

  return (
    <section id='user-form'>
      {formMode === 'Sign Up' && (
        <h2> Create an account</h2>
      )}
      {formMode === 'Log In' &&(
        <h2> Log in to your account </h2>
      )}
      {attemptFailed && <p>{formMode} attempt failed. Please try again.</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formData);
        }}
      >
        <div id='user-input-fields'>
        <input
          type="text"
          placeholder="username"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData((state) => ({ ...state, name: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="password"
          required
          minLength={8}
          value={formData.password}
          onChange={(e) =>
            setFormData((state) => ({ ...state, password: e.target.value }))
          }
        />
        </div>
        {/* SIGNUP-SPECIFIC INPUTS */}
        {formMode === 'Sign Up' && (
          <div>
            <div className='diet-checkboxes'>
              <legend><h4>Select your diet:</h4></legend>
              {dietInputs}
              <input
                type="checkbox"
                name="none"
                id="none-diet"
                value="none"
                checked={!formData.diet}
                onChange={() =>
                  setFormData((state) => {
                    delete state.diet;
                    return { ...state };
                  })
                }
              />
              <label htmlFor="none-diet">None</label>
            </div>
            <div>
              <legend><h4>Select your intolerances:</h4></legend>
              {intoleranceInputs}
            </div>
          </div>
        )}
        <button>Submit</button>
      </form>
    </section>
  );
};
