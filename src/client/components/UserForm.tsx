import React, { useState } from "react";
import { UserFormState } from "../../Types";
import { dietArr, intoleranceArr } from "../utils/arrs";
import { intoleranceObj } from "../utils/objs";

type UserFormProps = {
  type: "Sign Up" | "Log In";
  handleSubmit: (formData: UserFormState) => void;
};

export default ({ type, handleSubmit }: UserFormProps) => {
  const initialFormState: UserFormState = {
    name: "",
    password: "",
    intolerance: intoleranceObj,
  };

  const [formData, setFormData] = useState(initialFormState);

  // If type is Log In, don't waste time populating dietInputs and intoleranceInputs
  let dietInputs, intoleranceInputs;
  if (type === "Sign Up") {
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
    <section id="user-form">
      {type === 'Sign Up' && (
        <h2> Create an account</h2>
      )}
      {type === 'Log In' &&(
        <h2> Log in to your account </h2>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formData);
        }}
      >
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

        {/* SIGNUP-SPECIFIC INPUTS */}
        {type === "Sign Up" && (
          <div className='boxes'>
            <div>
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
