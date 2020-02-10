import React from 'react';
import './styles.scss';

const NavlessLayout = props => (
  <main className="navless-layout">
    {props.children}
  </main>
);

export default NavlessLayout;
