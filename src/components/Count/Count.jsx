import React from 'react';
import count from './Count.module.css';

function Count(){
	return(
		<section className={ count.count }>
			<button className={ count.count__button }>Посчитать</button>
		</section>
	);
};

export default Count;