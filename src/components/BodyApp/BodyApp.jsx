import React from 'react';
import Players from '../Players/Players';
import Count from '../Count/Count';
import bodyApp from './BodyApp.module.css';

function BodyApp(props){
	return(
		<div className={ bodyApp.bodyApp }>
			<Players data={ props.players } />
			<Count />
		</div>
	);
};

export default BodyApp;