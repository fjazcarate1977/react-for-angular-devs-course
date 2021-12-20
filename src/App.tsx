import React, { useState, useEffect } from 'react';
import './App.css';

import * as Atoms from './atoms';

import { FormFieldArray } from './shared/formData';

interface FormFieldStateProps {
  value: string;
  name: string;
  error: boolean;
}

const App: React.FC = () => {
  const [state, setState] = useState<FormFieldStateProps[]>([]);
  const [submitState, setSubmitState] = useState(false);

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

  const handleCheckboxCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubmitState(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updateState = state.map((data, idx) => ({
      ...data,
      error: !FormFieldArray[idx].validation.test(data.value)
    }));

    setState(updateState);

    const passValidation = !updateState.some((data) => data.error);
    if (passValidation) {
      alert('Code Challenge completed');
    }
  };

  return (
    <div className="main-block">
      <h1>Registration</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <hr />
        {FormFieldArray.map(
          (data, idx) =>
            (data.type === 'text' || data.type === 'password') && (
              <Atoms.InputText
                key={idx}
                {...data}
                handleInput={(e) => handleInputCallback(e, data.name)}
              >
                {state[idx]?.error && (
                  <span className="error-message">{data.errormessage}</span>
                )}
              </Atoms.InputText>
            )
        )}

        <hr />
        <Atoms.InputCheckbox handleInput={(e) => handleCheckboxCallback(e)} />
        <hr />
        <div className="btn-block">
          <button disabled={!submitState} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
