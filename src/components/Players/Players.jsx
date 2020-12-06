import React from 'react';
import players from './Players.module.css';
import Player from './Player/Player';

function Players(props){
	let tableCount = props.data.user.map(c => <Player name = { c.name } count = { c.count } />);
	return(
		<section className={ players.players }>
			<table className={ players.players__table }>
				<tr>
					<th>Ник</th>
					<th>Счет</th>
					<th>Добавить</th>
				</tr>
				{ tableCount }
			</table>
		</section>
	);
};

export default Players;