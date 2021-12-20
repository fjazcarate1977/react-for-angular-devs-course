import React from 'react';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }: HeaderProps) => (
  <h1>{children}</h1>
);

export default Header;
