import React from 'react';
import { logout }  from 'api/functions/auth.js';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<Menu>
			<Menu.Item as={Link} to='/dashboard'>
				Dashboard
			</Menu.Item>
			<Menu.Item position='right' onClick={() => { logout() }}>
				Logout
			</Menu.Item>
		</Menu>
	);
}