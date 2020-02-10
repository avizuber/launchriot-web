import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { login }  from 'api/functions/auth'
// Components
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

export default function Login() {

	const [authState, setAuthState] = useState(null);
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	useEffect( () => {
		if(authState && authState.error) {
			setError(authState.error);
		}
		if(authState && authState.success) {
			setError(null);
			localStorage.setItem('token', authState.success.token);
		}
	}, [authState]);

	const handleFieldChange = (e) => {
		setUser({...user, [e.target.name]: e.target.value});
		setError(null);
	}

	const handleLoginSuccess = (resData) => {
		setAuthState(resData);
		window.location.href = "/dashboard";
	}

	return (
		<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as='h2' color='teal' textAlign='center'>
					Log In
				</Header>
				<Form size='large'>
					<Segment stacked>
						<Form.Input 
							fluid
							required
							placeholder='Email' 
							type='email' 
							name='email' 
							id='email'
							error={error && error}
							onChange={(e) => {handleFieldChange(e)}} />
						<Form.Input
							fluid
							required
							placeholder='Password' 
							type='password' 
							name='password' 
							id='password'
							error={error && error}
							onChange={(e) => {handleFieldChange(e)}} />
						<Button
							fluid
							color='teal'
							size='large'
							disabled={!user}
							onClick={() => { 
								login(user)
								.then( res => { handleLoginSuccess(res.data) }) }
							}>
							{authState && authState.success ? "Logged In!" : "Log In"}
						</Button>
					</Segment>
				</Form>
				<Message>
					New here? <Link to={"register"}>Sign up today!</Link>
				</Message>
			</Grid.Column>
		</Grid>
	);
}