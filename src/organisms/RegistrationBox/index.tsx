import React from 'react';

import * as Molecules from '../../molecules';
import * as Atoms from '../../atoms';

const RegistrationBox: React.FC = () => (
  <div className="main-block">
    <Atoms.Header>Registration</Atoms.Header>
    <Molecules.RegistrationForm />
  </div>
);

export default RegistrationBox;
