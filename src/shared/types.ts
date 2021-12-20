import { HTMLInputTypeAttribute } from 'react';

export interface FormFieldProps {
  icon: string;
  errormessage: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  name: string;
  validation: RegExp;
}
