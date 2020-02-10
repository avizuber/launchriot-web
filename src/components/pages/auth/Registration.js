import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { register }  from 'api/functions/auth'
// Components
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

export default function Registration() {

	const [authState, setAuthState] = useState(null);
	const [newUser, setNewUser] = useState(null);
	const [errors, setErrors] = useState(null);

	useEffect( () => {
		if(authState && authState.error) {
			setErrors(authState.error);
		}
		if(authState && authState.success) {
			setErrors(null);
		}
	}, [authState]);

	const handleFieldChange = (e) => {
		setNewUser({...newUser, [e.target.name]: e.target.value});
		setErrors({...errors, [e.target.name]: null});
	}

	return (
		<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as='h2' color='white' textAlign='center'>
					Sign Up
				</Header>
				<Form size='large'>
					<Segment stacked>
						<Form.Input 
							fluid
							required
							placeholder='First Name' 
							type='text' 
							name='f_name' 
							id='f_name'
							error={errors && errors.f_name}
							onChange={(e) => {handleFieldChange(e)}} />
						<Form.Input 
							fluid
							required 
							placeholder='Last Name' 
							type='text' 
							name='l_name' 
							id='l_name'
							error={errors && errors.l_name}
							onChange={(e) => {handleFieldChange(e)}} />
						<Form.Input 
							fluid
							required
							placeholder='Email' 
							type='email' 
							name='email' 
							id='email'
							error={errors && errors.email}
							onChange={(e) => {handleFieldChange(e)}} />
						<Form.Input
							fluid
							required
							placeholder='Password' 
							type='password' 
							name='password' 
							id='password'
							error={errors && errors.password}
							onChange={(e) => {handleFieldChange(e)}} />
						<Form.Input
							fluid
							required
							placeholder='Confirm Password' 
							type='password' 
							name='c_password' 
							id='c_password'
							error={errors && errors.c_password}
							onChange={(e) => {handleFieldChange(e)}} />
						<Button
							fluid
							color='teal'
							size='large'
							disabled={!newUser}
							onClick={() => { 
								register(newUser)
								.then( res => { setAuthState(res.data) }) }
							}>
							{authState && authState.success ? "Registered!" : "Register"}
						</Button>
					</Segment>
				</Form>
				<Message>
					Already a member?  <Link to={"login"}>Log in here.</Link>
				</Message>
			</Grid.Column>
		</Grid>
	);
}