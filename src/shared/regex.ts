export const NameVal = /^\S{4,15}$/;
export const MailVal = /^[^@]+[@][a-zA-Z]+\.[a-zA-Z]+/;
export const PasswordVal =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*@|!|$|&|%|-|_|)[a-zA-Z0-9@!$&%-_]{8,12}$/;
