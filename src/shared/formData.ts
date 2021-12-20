import { FormFieldProps } from './types';
import * as Validation from './regex';

export const FormFieldArray: FormFieldProps[] = [
  {
    icon: 'envelope',
    placeholder: 'Email',
    type: 'text',
    name: 'email',
    error: {
      validation: Validation.MailVal,
      errormessage: 'Email error format validation'
    }
  },
  {
    icon: 'user',
    placeholder: 'Name',
    type: 'text',
    name: 'name',
    error: {
      validation: Validation.NameVal,
      errormessage: 'Name error format validation'
    }
  },
  {
    icon: 'user',

    placeholder: 'Password',
    type: 'password',
    name: 'password',
    error: {
      validation: Validation.PasswordVal,
      errormessage: 'Password error format validation'
    }
  }
];
