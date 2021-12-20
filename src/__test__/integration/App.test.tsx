import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../../App';

global.alert = jest.fn();

describe('<App />', () => {
  let inputEmail: HTMLElement;
  let inputName: HTMLElement;
  let inputPassword: HTMLElement;
  let checkboxButton: HTMLElement;
  let submitButton: HTMLElement;

  beforeEach(() => {
    render(<App />);

    inputEmail = screen.getByTestId('testid-email');
    inputName = screen.getByTestId('testid-name');
    inputPassword = screen.getByTestId('testid-password');

    checkboxButton = screen.getByTestId('testid-checkbox-button');

    submitButton = screen.getByTestId('testid-submit-button');
  });

  it('Render propertly', () => {
    const linkElement = screen.getByText('Registration');
    expect(linkElement).toBeInTheDocument();
  });

  it('Check that validation error are showing', () => {
    userEvent.type(inputEmail, 'test-test.com');
    userEvent.type(inputName, 'John Doe');
    userEvent.type(inputPassword, '12345');

    userEvent.click(checkboxButton);

    userEvent.click(submitButton);

    const errorMessages = screen.getAllByTestId('testid-error-messages');

    expect(errorMessages).toHaveLength(3);
  });

  it('Check that alert is showing', () => {
    userEvent.type(inputEmail, 'test@test.com');
    userEvent.type(inputName, 'JohnDoe');
    userEvent.type(inputPassword, 'r5ggdg@c!$%S');

    userEvent.click(checkboxButton);

    userEvent.click(submitButton);

    expect(global.alert).toHaveBeenCalledTimes(1);
  });
});
