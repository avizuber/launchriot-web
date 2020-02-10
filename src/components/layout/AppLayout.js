import React from 'react';
// Components
import Navbar from 'components/layout/Navbar';

const AppLayout = props => (
  <>
		<Navbar />
		<main>
			{props.children}
		</main>
  </>
);

export default AppLayout;