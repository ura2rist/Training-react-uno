import React from 'react';
import Reset from '../Reset/Reset';
import Add from '../Add/Add';
import headerApp from './HeaderApp.module.css';

function HeaderApp(props){
	return(
		<div className={ headerApp.headerApp }>
			<Reset />
			<Add addUser={ props.addUser } text={ props.state } updateText={ props.updateText } />
		</div>
	);
};

export default HeaderApp;