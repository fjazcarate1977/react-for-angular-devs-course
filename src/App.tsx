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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.info(state, 'great Franky');
  };

  return (
    <div className="main-block">
      <h1>Registration</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <hr />
        {FormFieldArray.map(
          (data, idx) =>
            (data.type === 'text' || data.type === 'password') && (
              <Molecules.InputText
                key={idx}
                {...data}
                handleInput={(e) => handleInputCallback(e, data.name)}
              >
                {state[idx]?.error && (
                  <span className="error-message">{data.errormessage}</span>
                )}
              </Molecules.InputText>
            )
        )}

        <hr />
        <div className="form-group">
          <input type="checkbox" id="html" />
          <label htmlFor="html">I Agree to Privacy Policy</label>
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
