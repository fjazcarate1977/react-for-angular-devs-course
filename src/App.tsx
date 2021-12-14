import React, { HTMLInputTypeAttribute, useState, useEffect } from 'react';
import './App.css';

import * as Molecules from './molecules';

interface FormFieldProps {
  icon: string;
  errormessage: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  name: string;
}

interface FormFieldStateProps {
  value: string;
  name: string;
  error: boolean;
}

const FormFieldArray: FormFieldProps[] = [
  {
    icon: 'envelope',
    errormessage: 'Email error format validation',
    placeholder: 'Email',
    type: 'text',
    name: 'email'
  },
  {
    icon: 'user',
    errormessage: 'Name error format validation',
    placeholder: 'Name',
    type: 'text',
    name: 'name'
  },
  {
    icon: 'user',
    errormessage: 'Password error format validation',
    placeholder: 'Password',
    type: 'password',
    name: 'password'
  }
];

const App: React.FC = () => {
  const [state, setState] = useState<FormFieldStateProps[]>([]);

  useEffect(() => {
    const initalFormSate = FormFieldArray.reduce<FormFieldStateProps[]>(
      (previousValue, currentValue) =>
        previousValue.concat({
          name: currentValue.name,
          value: '',
          error: false
        }),
      []
    );
    setState(initalFormSate);
  }, []);

  const handleInputCallback = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const updateState = state.map((data) =>
      data.name === name ? { ...data, value: e.target.value } : data
    );
    setState(updateState);
  };

  return (
    <div className="main-block">
      <h1>Registration</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.info(state, 'great Franky');
        }}
      >
        <hr />
        {FormFieldArray.map(
          (data, idx) =>
            (data.type === 'text' || data.type === 'password') && (
              <Molecules.InputStyed
                key={idx}
                {...data}
                handleInput={(e) => handleInputCallback(e, data.name)}
              >
                {state[idx]?.error && (
                  <span className="error-message">{data.errormessage}</span>
                )}
              </Molecules.InputStyed>
            )
        )}

        <hr />
        <div className="gender">
          <input type="radio" value="none" id="male" name="gender" checked />
          <label htmlFor="male" className="radio">
            Male
          </label>
          <input type="radio" value="none" id="female" name="gender" />
          <label htmlFor="female" className="radio">
            Female
          </label>
        </div>
        <hr />
        <div className="btn-block">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
