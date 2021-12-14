import React from 'react';

interface InputStyledProps {
  icon: string;
  handleInput: React.ChangeEventHandler<HTMLInputElement>;
  children: React.ReactNode;
}

const InputStyled: React.FC<InputStyledProps> = ({
  handleInput,
  icon,
  children,
  ...props
}: InputStyledProps) => (
  <>
    <label id="icon">
      <i className={`fas fa-${icon}`}></i>
    </label>
    <input {...props} onChange={(e) => handleInput(e)} />
    {children}
  </>
);

export default InputStyled;
