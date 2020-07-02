import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


function Account(props) {

	let history = useHistory();

	const [show, setShow] = useState(false)

	const iconStyle = { fontSize: 15, paddingRight: '10px' }

	function openPage(page) {
		history.push('/' + page)
	}

	return (
		<div className={show ? "menu show": "menu"}>
			<div className="menu_icon" onClick={()=>setShow(p=>!p)}>
				{show ? <CloseIcon/> : <MenuIcon/>}
			</div>
			<img src="/img/logo2.png" style={{height: '40px', padding: '5px 10px 30px 10px'}} alt="logo"/>
			<div className={props.active === 'tasks' ? 'active' : ''} onClick={()=>openPage('tasks')} >
				<DashboardIcon style={iconStyle}/> Задачи и работы
			</div>
			<div className={props.active === 'projects' ? 'active' : ''} onClick={()=>openPage('')} >
				<DashboardIcon style={iconStyle}/> Проекты
			</div>
			<div className={props.active === 'calendar' ? 'active' : ''} onClick={()=>openPage('calendar')} >
				<DashboardIcon style={iconStyle}/> Календарь
			</div>
			<div className={props.active === 'opportunities' ? 'active' : ''} onClick={()=>openPage('opportunities')} >
				<DashboardIcon style={iconStyle}/> Возможности
			</div>
		</div>
	)
}

export default Account;