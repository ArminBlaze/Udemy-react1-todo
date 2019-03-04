import React from 'react';
import TodoListItem from 'components/TodoListItem';

const TodoList = (options) => {
	console.log(options);
//	const items = ['Learn React', 'Build Awesome App'];
	
	return (
		<ul>
			<li>{TodoListItem()}</li>
			<li>{TodoListItem()}</li>
		</ul>
	);
};

export default TodoList;