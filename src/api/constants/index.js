const API_URL = "http://localhost:8000/api/v1/";

const API_TOKEN = localStorage.getItem('token');

const API_GET_HEADERS = {
	headers: {
		Accept: 'application/json',
		Authorization: 'Bearer ' + API_TOKEN
	}
};

export {
	API_URL,
	API_TOKEN,
	API_GET_HEADERS,
};