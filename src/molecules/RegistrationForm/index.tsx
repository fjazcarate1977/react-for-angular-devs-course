import React, { useState, useEffect } from 'react';

import * as Atoms from '../../atoms';

import { FormFieldArray } from '../../shared/formData';

interface FormFieldStateProps {
  value: string;
  name: string;
  error: boolean;
}

const RegistrationForm: React.FC = () => {
  const [state, setState] = useState<FormFieldStateProps[]>([]);
  const [submitState, setSubmitState] = useState(false);

  useEffect(() => {
    const initalFormState = FormFieldArray.reduce<FormFieldStateProps[]>(
      (previousValue, currentValue) =>
        previousValue.concat({
          name: currentValue.name,
          value: '',
          error: false
        }),
      []
    );
    setState(initalFormState);
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
      error: !FormFieldArray[idx].error.validation.test(data.value)
    }));

    setState(updateState);

    const passValidation = !updateState.some((data) => data.error);
    if (passValidation) {
      alert('Code Challenge completed');
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <hr />
      {FormFieldArray.map((data, idx) => (
        <Atoms.InputText
          key={idx}
          {...data}
          handleInput={(e) => handleInputCallback(e, data.name)}
          data-testid={`testid-${data.name}`}
        >
          {state[idx]?.error && (
            <span data-testid="testid-error-messages" className="error-message">
              {data.error.errormessage}
            </span>
          )}
        </Atoms.InputText>
      ))}

      <hr />
      <Atoms.InputCheckbox
        data-testid="testid-checkbox-button"
        handleInput={(e) => handleCheckboxCallback(e)}
      />
      <hr />
      <div className="btn-block">
        <button
          data-testid="testid-submit-button"
          disabled={!submitState}
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
