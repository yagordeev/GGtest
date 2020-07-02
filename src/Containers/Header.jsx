import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { system_status } from '../actions';


function Header() {

	let history = useHistory();

	const dispatch = useDispatch();
	const user = useSelector(state => state.user);

	function exit() {
		history.push('/');
		dispatch(system_status('unauthorized'));
	}

	return (
		<div className="header" onClick={exit}>
			<div className="ava clickable" style={{backgroundImage: 'url('+user.img+')'}}/>
		</div>
	)
}

export default Header;