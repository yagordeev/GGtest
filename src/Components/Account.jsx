import React from 'react';

import Menu from '../Containers/Menu.jsx';
import Header from '../Containers/Header.jsx';
import Projects from '../Components/Projects.jsx';
import Empty from '../Components/Empty.jsx';

function Account(props) {

	return (
		<div className="account">

			<Menu active={props.active}/>
			<div className="mainBlock">
				<Header />
				{props.active === 'tasks' && (
					<Empty/>
				)}
				{props.active === 'projects' && (
					<Projects/>
				)}
				{props.active === 'calendar' && (
					<Empty/>
				)}
				{props.active === 'opportunities' && (
					<Empty/>
				)}
			</div>

		</div>
	)
}

export default Account;