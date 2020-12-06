import React from 'react';
import HeaderApp from './components/HeaderApp/HeaderApp';
import BodyApp from './components/BodyApp/BodyApp';
import './App.css';
import article from './components/Main.module.css';

function App(props){
  return(
	<article className={ article.cart }>
	   	<HeaderApp addUser={ props.addUser } state={ props.data.text } updateText={ props.updateText }/>
	    <BodyApp players={ props.data } />
	</article>
  );
};

export default App;