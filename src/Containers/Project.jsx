import React, { useEffect, createRef } from 'react';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';


function Project(props) {

	const canvas = createRef();

	const project = props.project;

	const iconStyle = { fontSize: 15, paddingRight: '5px', verticalAlign: 'middle' }

	const options = {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric'
	}
	let newFrom = new Date(project.dateFrom);
	let dateFrom = newFrom.toLocaleDateString('ru-RU', options).replace(/\s*г\./, "");
	let newTo = new Date(project.dateTo);
	let dateTo = newTo.toLocaleDateString('ru-RU', options).replace(/\s*г\./, "");
	console.log(project.dateTo, newTo, dateTo);

	useEffect(() => {

		const ctx = canvas.current.getContext('2d');

		ctx.beginPath();
		ctx.arc(15, 15, 10, 0, 6.283185);
		ctx.lineWidth = 4;
		ctx.strokeStyle = '#eee';
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(15, 15, 10, 0, getRadians(project.percentageStatus * 3.6));
		ctx.lineWidth = 4;
		ctx.strokeStyle = "#29c769";
		ctx.stroke();

	}, [])

	function getRadians(degrees) {
		return (Math.PI / 180) * degrees;
	}

	return (
		<div className="project">
			<div className="top" style={{background: 'url('+project.img+')'}}>
				{project.category && (
					<div className="сategory">{project.category}</div>
				)}
				{project.status && (
					<div className="status">{project.status}</div>
				)}
				{project.building && (
					<div className="name">{project.building}</div>
				)}
			</div>
			<div className="middle">
				<h5>{project.project}</h5>
				<p>
					<CalendarTodayIcon style={iconStyle}/>
					{dateFrom} – {dateTo} гг.
				</p>
				<p>
					<PersonOutlineIcon style={iconStyle}/>
					{project.supervisor}
				</p>
				<p>
					<AttachMoneyIcon style={iconStyle}/>
					{project.admin}
				</p>
			</div>
			<div className="bottom">
				<div className="members">
					{project.members.map(member =>
						<div
							key={member.img}
							className="img"
							style={{background: 'url('+member.img+')'}}
						/>
					)}
				</div>
				<div className="status">
					<canvas ref={canvas} id="canvas" width="30" height="30" style={{transform: 'rotate(-90deg)'}}></canvas>
				</div>
			</div>
		</div>
	)
}

export default Project;