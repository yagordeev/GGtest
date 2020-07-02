const systemReducer = (state = { 'status': null }, action) => {
	switch (action.type) {

		case 'STATUS':
			return { ...state, status: action.payload };

		default:
			return state
	}
}
export default systemReducer;