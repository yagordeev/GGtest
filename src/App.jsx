import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { system_status, add_projects, authorization } from './actions';

import Login from './Components/Login.jsx';
import Account from './Components/Account.jsx';

function App() {
	const dispatch = useDispatch();
	const status = useSelector(state => state.system.status);

	const [cookies, setCookie, removeCookie] = useCookies(['token', 'login']);

	useEffect(() => {
		let flag = true;

		if(flag) {
			if(status === 'authorized') {
				/* пользователь уже авторизован */
				getData()
			} else if(status === 'unauthorized') {
				//пользователь не авторизован - очищаем куки, если есть
				removeCookie('token', { path: '/' });
				removeCookie('login', { path: '/' });
			} else {
				//проводим авторизацию
				authonticate();
			}
		}
		return () => { flag = false };
	}, [status])

	function getData() {
		// добавляем дефолтный проект
		const defaultProject = {
			project: 'Терапевтический корпус',
			building: 'Hadassah Medical',
			category: 'Медицина',
			status: 'Строится',
			percentageStatus: '75',
			img: '/img/hadassahmedical.jpg',
			dateFrom: '2019-04-08',
			dateTo: '2019-01-31',
			supervisor: 'Денис Конев',
			admin: 'Гросолим Лимитед',
			members: [
				{ name: 'Victor', img: '/img/member0.jpg' },
				{ name: 'Denis', img: '/img/member1.jpg' },
				{ name: 'Vika', img: '/img/member2.jpg' },
				{ name: 'Alex', img: '/img/member3.jpg' },
			]
		}
		dispatch(add_projects(defaultProject))
	}


	function authonticate() {
		let validTokenFromServer = 'd5kjnewf43f77k1';
		if(cookies.token === validTokenFromServer && cookies.login) {
			//сохраняем данные администратора
			dispatch(authorization({ login: cookies.login, token: cookies.token, img: '/img/ava.jpg' }));
			//устанавливаем статус - авторизован
			dispatch(system_status('authorized'));
		}
	}

	return (
		(status === 'authorized') ? (
			<Switch>
				<Route exact path="/tasks" component={()=><Account active='tasks'/>} />
				<Route exact path="/" component={()=><Account active='projects'/>} />
				<Route exact path="/calendar" component={()=><Account active='calendar'/>} />
				<Route exact path="/opportunities" component={()=><Account active='opportunities'/>} />
				<Route path="*" component={()=><Account active='projects'/>} />
			</Switch>
		) : (
			<Switch>
				<Route exact path="/forget" component={Login} />
				<Route path="*" component={Login} />
			</Switch>
		)
	)
}

export default App;