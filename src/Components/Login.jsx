import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { system_status } from '../actions';
import { useCookies } from 'react-cookie';

function Login() {

	const dispatch = useDispatch();

	const [cookies, setCookie] = useCookies(['token', 'username']);
	const [user, setUser] = useState({});
	const [warning, setWarning] = useState('');
	const [checked, setChecked] = useState(false)


	function handleChange(e) {
		let { name, value } = e.target;

		setUser(prev => {
			return {
				...prev,
				[name]: value
			}
		})
	}

	function sendForm(e) {
		e.preventDefault();

		if(user.login === 'admin' && user.password === 'admin') {
			let token = 'd5kjnewf43f77k1';
			let tokenAge = checked ? (12 * 30 * 86400) : 86400;
			setCookie('login', user.login, { path: '/', maxAge: tokenAge, httpOnly: false });
			setCookie('token', token, { path: '/', maxAge: tokenAge, httpOnly: false });
			dispatch(system_status('identify'));
		} else {
			setWarning('Неправильный логин или пароль!')
		}
	}

	return (
		<div className="auth">
			<div className="content">
				<img width="300" src="/img/logo.png" alt="logo"/>
				{warning && (
					<p id="warning" className="center">{warning}</p>
				)}
				<form id="signIn" onSubmit={sendForm}>
					<label className="default">Логин</label>
					<input
						type="text"
						id="login"
						name="login"
						className={warning ? "default warning" : "default"}
						placeholder="Логин"
						onChange={handleChange}
						value={user.login || ''}
						autoComplete="off"
						required="required"
					/>
					<label className="default">Пароль</label>
					<input
						id="password"
						type="password"
						name="password"
						className={warning ? "default warning" : "default"}
						placeholder="Пароль"
						onChange={handleChange}
						value={user.password || ''}
						autoComplete="off"
						required="required"
					/>
					<p>
						<input
							type="checkbox"
							name="remember"
							id="remember"
							onChange={()=>setChecked(p=>!p)}
							className="checkbox-dafault"
							checked={checked}
						/>
						<label htmlFor="remember" className="clickable">
							Запомнить пароль
						</label>
					</p>
					<button type="submit" className="default" form="signIn">
						Войти
					</button>
					<a href="forget" className="default">Забыли пароль?</a>
				</form>
			</div>
		</div>
	)
}

export default Login;