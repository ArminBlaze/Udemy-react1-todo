import React from 'react';
import ReactDom from 'react-dom';

//Относительные пути - начинаются с ./ - так будет искаться относительно этого файла
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter';

import './index.css';


const App = () => {
	const isLoggedIn = false;
	const loginBox = <span>Log in please</span>;
	const welcomeBox = <span>Welcome Back!</span>;
	
	const todoData = [
		{label: 'Drink Coffee', id: 1},
		{label: 'Make Awesome App', important: true, id: 2},
		{label: 'Have a lunch', id: 3},
	];
	
	
	return (
		<div className="todo-app">
			{isLoggedIn ? welcomeBox : loginBox}
			<AppHeader toDo={1} done={3} />
			<div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
			<TodoList todos={todoData} />
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
