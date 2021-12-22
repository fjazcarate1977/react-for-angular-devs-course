import React from 'react';

import { FormFieldProps } from '../../shared/types';

interface InputTextProps {
  icon: string;
  handleInput: React.ChangeEventHandler<HTMLInputElement>;
  children: React.ReactNode;
}

const InputText: React.FC<InputTextProps> = ({
  handleInput,
  icon,
  children,
  ...props
}: InputTextProps) => {
  const { error, ...noErrorProps } = props as FormFieldProps;
  return (
    <>
      <label id="icon">
        <i className={`fas fa-${icon}`}></i>
      </label>
      <input {...noErrorProps} onChange={(e) => handleInput(e)} />
      {children}
    </>
  );
};

export default InputText;
