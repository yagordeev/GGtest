export const system_status = (status) => {
	return {
		type: 'STATUS',
		payload: status
	};
}

export const authorization = (data) => {
	return {
		type: 'SIGN_IN',
		payload: data
	};
}

export const add_projects = (all) => {
	return {
		type: 'ADD_PROJECTS',
		payload: all
	};
}
export const add_project = (data) => {
	return {
		type: 'ADD_PROJECT',
		payload: data
	};
}