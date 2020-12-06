import React from 'react';
import reset from './Reset.module.css';

function Reset(){
	return(
		<section className={ reset.reset }>
			<button className={ reset.reset__button } type="button">Обновить</button>
		</section>
	);
};

export default Reset;