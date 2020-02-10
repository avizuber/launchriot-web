import axios from 'axios';
import { API_URL, API_GET_HEADERS } from 'api/constants';

const register = ( newUser ) => {
	return axios.post(API_URL+'register', {...newUser, app_name: 'unify-web'});
};

const login = ( user ) => {
	return axios.post(API_URL+'login', {...user, app_name: 'unify-web'});
};

const logout = () => {
	axios
	.get(API_URL+'logout', API_GET_HEADERS
	)
	.then(res => {
		if(res.data.success) {
			localStorage.removeItem('token');
			return window.location.href = "/login"
		} else {
			return false;
		}
	})
	.catch(err => console.log(err));
};

export {
	register,
	login,
	logout
};