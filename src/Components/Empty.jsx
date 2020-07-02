import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';

function Empty() {

	return (
		<div style={{width: 'fit-content', margin: '25% auto'}}>
			<div className="center"><SettingsIcon /></div>
			Раздел находится в разработке
		</div>
	)
}

export default Empty;