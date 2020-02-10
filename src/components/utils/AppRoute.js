import React from "react";
import { Route, Redirect } from "react-router-dom";

const AppRoute = ({component: Component, layout: Layout, ...props}) => {
	const hasToken = localStorage.getItem('token');
	const { isPrivateRoute, isGuestRoute } = props;
	
	if(isPrivateRoute && !hasToken) {
		return (
			<Redirect to={{pathname: '/login', state: {from: props.location}}} />
		);
	}

	if(isGuestRoute && hasToken) {
		return (
			<Redirect to={{pathname: '/dashboard', state: {from: props.location}}} />
		);
	}
  
	return (
		<Route
			{...props}
			render={(props) => (
				<Layout>
					<Component {...props} />
				</Layout>
			)}
		/>
	);
}

export default AppRoute;