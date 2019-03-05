import React from 'react';
import TodoListItem from 'components/TodoListItem';

const TodoList = ({todos}) => {
	
	const elements = todos.map( (item, i) => {
		return (
			<li>
				<TodoListItem label={item.label} important={item.important} />
			</li>
		)
	});
	
	
	return (
		<ul>
			{elements}
		</ul>
	);
};

export default TodoList;