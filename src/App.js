import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// Components
import AppLayout from 'components/layout/AppLayout';
import NavlessLayout from 'components/layout/NavlessLayout/NavlessLayout';
import AppRoute from 'components/utils/AppRoute';
import Registration from 'components/pages/auth/Registration';
import Login from 'components/pages/auth/Login';
import Dashboard from 'components/pages/Dashboard';

const App = () => {
	return (
		<Router>
			<Switch>
				<AppRoute 
					exact
					path="/"
					component={Dashboard}
					layout={AppLayout} 
					isPrivateRoute />
				<AppRoute 
					exact
					path="/register"
					component={Registration}
					layout={NavlessLayout} 
					isGuestRoute />
				<AppRoute 
					exact
					path="/login"
					component={Login}
					layout={NavlessLayout} 
					isGuestRoute />
				<AppRoute 
					exact
					path="/dashboard"
					component={Dashboard}
					layout={AppLayout} 
					isPrivateRoute />
			</Switch>
		</Router>
	);
}

export default App;
