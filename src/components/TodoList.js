import React from 'react';
import TodoListItem from 'components/TodoListItem';

const TodoList = (options) => {
	console.log(options);
//	const items = ['Learn React', 'Build Awesome App'];
	
	return (
		<ul>
			<li><TodoListItem label="Drink Coffee" /></li>
			<li><TodoListItem label="Build React App" /></li>
			<li>{ TodoListItem( {label: "Build React App 2"} ) }</li>
		</ul>
	);
};

export default TodoList;