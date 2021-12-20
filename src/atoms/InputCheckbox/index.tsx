import React from 'react';

interface InputCheckboxProps {
  handleInput: React.ChangeEventHandler<HTMLInputElement>;
}

const InputCheckbox: React.FC<InputCheckboxProps> = ({
  handleInput,
  ...props
}: InputCheckboxProps) => (
  <div className="form-group">
    <input
      {...props}
      onChange={(e) => handleInput(e)}
      type="checkbox"
      id="html"
    />
    <label htmlFor="html">I Agree to Privacy Policy</label>
  </div>
);

export default InputCheckbox;
