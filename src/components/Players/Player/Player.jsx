import React from 'react';
import player from './Player.module.css';

function Player(props){
	return(
		<tr>
			<td>{ props.name }</td>
			<td>{ props.count }</td>
			<td><input type="text" className={ player.players__table__amount } /></td>
			<td><input type="button" className={ player.players__table__buttonClose } /></td>
		</tr>
	);
};

export default Player;