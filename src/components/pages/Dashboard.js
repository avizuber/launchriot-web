import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from 'api/functions/user';
// Components
import { Grid, Container, Header,  Message } from 'semantic-ui-react';

const Dashboard = () => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

	useEffect( () => {
		if(user === undefined) {
			dispatch(getUser());
		}
	});

	return (
		<Grid>
			<Grid.Row>
				<Container>
					<Header as='h2'>Dashboard</Header>
					{user && user.email &&
						<Message
							icon='sun'
							header={`Welcome back, ${user.f_name}!`}
							content='So nice to see you!'
						/>
					}
				</Container>
			</Grid.Row>
		</Grid>

	);
}

export default Dashboard;