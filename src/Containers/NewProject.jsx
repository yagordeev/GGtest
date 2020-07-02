import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { add_project } from '../actions';


function NewProject(props) {

	const inputEl = useRef(null);

	const dispatch = useDispatch();

	const [project, setProject] = useState({
		project: null,
		building: null,
		category: null,
		img: null,
		dateFrom: null,
		dateTo: null,
		status: 'Проектируется',
		percentageStatus: 0,
		supervisor: null,
		admin: null,
		members: [
			{ name: 'Victor', img: '/img/member0.jpg' },
			{ name: 'Denis', img: '/img/member1.jpg' },
			{ name: 'Vika', img: '/img/member2.jpg' },
			{ name: 'Alex', img: '/img/member3.jpg' },
		]
	})

	function handleChange(e) {
		let { name, value } = e.target;
		setProject(prev => {
			return {
				...prev,
				[name]: value
			}
		})
	}

	function handleClick(e) {
		if(inputEl.current && !inputEl.current.contains(e.target)) {
			props.onModalClose()
		}
	};

	function addProject(e) {
		e.preventDefault();
		dispatch(add_project(project));
		props.onModalClose();
	}

	return (
		<div className="modal add_project" onClick={handleClick}>
			<div ref={inputEl} className="content">
				<form onSubmit={addProject}>
					<label className="default">Название проекта*</label>
					<input
						name="project"
						className="default"
						onChange={handleChange}
						value={project.project || ''}
						placeholder="Название проекта"
						required={true}
						autoComplete="off"
					/>
					<label className="default">Здание</label>
					<input
						name="building"
						className="default"
						onChange={handleChange}
						value={project.building || ''}
						placeholder="Название здания"
						autoComplete="off"
					/>
					<label className="default">Категория</label>
					<input
						name="category"
						className="default"
						onChange={handleChange}
						value={project.category || ''}
						placeholder="Здоровье и т.п."
						autoComplete="off"
					/>
					<label className="default">Изображение</label>
					<input
						name="img"
						className="default"
						onChange={handleChange}
						value={project.img || ''}
						placeholder="Ссылка на изображение"
						autoComplete="off"
					/>
					<label className="default">Продолжительность проекта*</label>
					<div className="flex">
						<input
							type="date"
							name="dateFrom"
							className="default"
							onChange={handleChange}
							value={project.dateFrom || ''}
							placeholder="Дата старта"
							required={true}
							autoComplete="off"
						/>
						<span style={{padding: '0 10px', marginBottom: '15px'}}>–</span>
						<input
							type="date"
							name="dateTo"
							className="default"
							onChange={handleChange}
							value={project.dateTo || ''}
							placeholder="Дата окончания"
							required={true}
							autoComplete="off"
						/>
					</div>
					<label className="default">Статус строительства</label>
					<div className="flex">
						<select name="status" className="default" value={project.status || ''} onChange={handleChange} style={{width: '48%'}}>
							<option value="Проектируется">Проектируется</option>
							<option value="Строится">Строится</option>
							<option value="Сдан">Сдан</option>
						</select>
						<div className="center" style={{width: '48%'}}>
							Процент выполнения: {project.percentageStatus || 0}%
							<input
								type="range"
								name="percentageStatus"
								style={{width: '100%', marginBottom: '15px'}}
								value={project.percentageStatus || 0}
								min="0"
								max="100"
								step="1"
								onChange={handleChange}
							/>

						</div>
					</div>
					<label className="default">Руководитель проекта*</label>
					<input
						name="supervisor"
						className="default"
						onChange={handleChange}
						value={project.supervisor || ''}
						placeholder="ФИО руководителя проекта"
						required={true}
						autoComplete="off"
					/>
					<label className="default">Администратор проекта*</label>
					<input
						name="admin"
						className="default"
						onChange={handleChange}
						value={project.admin || ''}
						placeholder="ФИО администратора проекта"
						required={true}
						autoComplete="off"
					/>
					<button type="submit" className="default">Добавить проект</button>
				</form>

			</div>
		</div>
	)
}

export default NewProject;