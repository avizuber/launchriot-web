export default (state = {}, { type, user }) => {
	switch (type) {
		case 'SET_USER':
			return {...state, user };
		default:
			return state;
	}
}