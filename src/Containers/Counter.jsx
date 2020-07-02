import React, { useState, useEffect } from 'react';

function Counter() {

	const [count, setCount] = useState(0)


	useEffect(() => {
		getCountFromServer()
	}, [])

	function getCountFromServer() {
		let count = 3;
		setCount(count)
	}

	return (
		<span className="counter">{count > 0 && count}</span>
	)
}

export default Counter;