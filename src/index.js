import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import App from './App';
import data from './redux/state';
import { addUser, updateText, subscribe } from './redux/state';

let rerenderEntireTree = (data) => {
	ReactDOM.render(
		<React.StrictMode>
			<App data={ data } addUser={ addUser } updateText={ updateText } />
		</React.StrictMode>,
		document.getElementById('root')
	);
}
rerenderEntireTree(data);

subscribe(rerenderEntireTree);