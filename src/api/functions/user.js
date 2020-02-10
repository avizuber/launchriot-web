import axios from 'axios';
import { API_URL, API_GET_HEADERS } from 'api/constants';
import { setUserAction } from "actions/user";

const getUser = () => {
	return dispatch => {
		axios
		.get(API_URL+'getUser', API_GET_HEADERS)
		.then(res => {
			if(res.data.user) {
				dispatch(setUserAction(res.data.user));
			}
		})
		.catch(err => console.log(err))
	};
};

export {
	getUser,
};
