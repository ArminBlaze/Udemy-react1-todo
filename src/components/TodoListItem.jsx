import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({label, important = false}) => {
	
	const style = {
		color: important ? "tomato" : "",
	}
	
	return (
		<span style={style} className="todoListItem">{label}</span>
	);
};

export default TodoListItem;