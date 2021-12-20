import { FormFieldProps } from './types';
import * as Validation from './regex';

export const FormFieldArray: FormFieldProps[] = [
  {
    icon: 'envelope',
    errormessage: 'Email error format validation',
    placeholder: 'Email',
    type: 'text',
    name: 'email',
    validation: Validation.MailVal
  },
  {
    icon: 'user',
    errormessage: 'Name error format validation',
    placeholder: 'Name',
    type: 'text',
    name: 'name',
    validation: Validation.NameVal
  },
  {
    icon: 'user',
    errormessage: 'Password error format validation',
    placeholder: 'Password',
    type: 'password',
    name: 'password',
    validation: Validation.PasswordVal
  }
];
