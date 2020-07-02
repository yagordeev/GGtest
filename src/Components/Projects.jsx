import React, { useState } from 'react';

import ProjectList from '../Containers/ProjectList.jsx';
import ProjectMap from '../Containers/ProjectMap.jsx';


function Projects() {

	const [active, setActive] = useState('list')

	function makeActive(name) {
		setActive(name)
	}

	return (
		<div className="content projects">
			<h1>Проекты</h1>
			<div className="submenu">
				<h5 onClick={()=>makeActive('list')} className={active==='list' ? 'active' : ''}>Cписок Проектов</h5>
				<h5 onClick={()=>makeActive('maps')} className={active==='maps' ? 'active' : ''}>Дорожные карты</h5>
			</div>
			<ProjectList hidden={active !== 'list'}/>
			<ProjectMap hidden={active !== 'maps'} />
		</div>
	)
}

export default Projects;