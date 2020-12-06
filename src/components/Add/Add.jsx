import React from 'react';
import add from './Add.module.css';

function Add(props){

	let newPost = React.createRef();

	let addPlayer = () => {
		let name = newPost.current.value;
		props.addUser(name);
	};

	let onNameChange = () => {
		let name = newPost.current.value;
		props.updateText(name);
	};
	
	return(
		<section className={ add.add }>
			<form action="add.php" method="GET" className={ add.add__form }>
				<input onChange={ onNameChange } type="text" name="name" ref={ newPost } value={ props.text } />
				<button className={ add.add__form__button} onClick={ addPlayer } type="button">Добавить</button>			
			</form>
		</section>
	);
};

export default Add;