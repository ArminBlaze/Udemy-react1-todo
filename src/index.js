import React from 'react';
import ReactDom from 'react-dom';

//Относительные пути - начинаются с ./ - так будет искаться относительно этого файла
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';


const App = () => {
	const isLoggedIn = false;
	const loginBox = <span>Log in please</span>;
	const welcomeBox = <span>Welcome Back!</span>;
	
	return (
		<div>
			{isLoggedIn ? welcomeBox : loginBox}
			<AppHeader />
			<SearchPanel />
			<TodoList items={['item1', 'item Banana']} />
		</div>
	)
}

//Этот код на JSX - его переделает в обычный JS Babel
//const el = (
//	<App />
//)

//Этот код в обычном JS, Но через метод реакта. Babel тут не нужен
//const el = React.createElement('h1', null, 'Hello World!!!');

//ReactDom.render(el, document.getElementById('root'));
ReactDom.render(App(), document.getElementById('root'));
