import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ReorderIcon from '@material-ui/icons/Reorder';

import Project from '../Containers/Project.jsx';
import NewProject from '../Containers/NewProject.jsx';

function ProjectList(props) {

	const projects = useSelector(state => state.project);

	const [list, setList] = useState(false);
	const [addProject, setAddProject] = useState(false);

	return (
		<div className={props.hidden ? 'project_list hidden' : 'project_list'}>
			<div className="head">
				<h4>Cписок проектов</h4>
				<button className="mini" onClick={()=>setAddProject(true)}>
					Добавить проект
				</button>
			</div>
			<div className="filter">
				<DashboardIcon
					style={{fontSize: 20, color: list ? '#9ba0a3' : '#3c0f72'}}
					onClick={()=>setList(false)}
				/>
				<ReorderIcon
					style={{fontSize: 22, color: list ? '#3c0f72' : '#9ba0a3'}}
					onClick={()=>setList(true)}
				/>
			</div>
			<div className={list ? "content list" : "content"}>
				{projects.length > 0 && projects.map(project =>
					<Project key={project.project} project={project}/>
				)}
			</div>
			{addProject && <NewProject onModalClose={()=>setAddProject(false)}/>}
		</div>
	)
}

export default ProjectList;