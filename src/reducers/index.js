import systemReducer from './system';
import userReducer from './user';
import projectReducer from './project';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	system: systemReducer,
	user: userReducer,
	project: projectReducer
})

export default allReducers;