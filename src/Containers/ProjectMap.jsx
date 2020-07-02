import React from 'react';


function ProjectMap(props) {

	return (
		<div className={props.hidden ? 'hidden' : ''}>
			<div style={{width: 'fit-content', margin: '25% auto'}}>Раздел находится в разработке</div>
		</div>
	)
}

export default ProjectMap;