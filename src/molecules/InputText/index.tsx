import React from 'react';

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
}: InputTextProps) => (
  <>
    <label id="icon">
      <i className={`fas fa-${icon}`}></i>
    </label>
    <input {...props} onChange={(e) => handleInput(e)} />
    {children}
  </>
);

export default InputText;
