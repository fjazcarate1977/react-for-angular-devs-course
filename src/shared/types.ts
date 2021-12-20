import { HTMLInputTypeAttribute } from 'react';

export interface FormFieldProps {
  icon: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  name: string;
  error: ErrorProps;
}

interface ErrorProps {
  validation: RegExp;
  errormessage: string;
}
