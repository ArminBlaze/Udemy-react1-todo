import React from 'react';
import TodoListItem from 'components/TodoListItem';

const TodoList = ({todos}) => {
	
	const elements = todos.map( (item, i) => {
		//используем деструктуризацию. Т.к. label={item.label} important={item.important} - Т.е. имена передаваемых свойств (label и important) Совпадают с именами свойств item.label и item.important. То мы передаём в компонент просто объект item
//		Либо можно вызывать компонент как обычную функцию
//		{TodoListItem(item)}
		
		return (
			<li key={item.id}>
				<TodoListItem {...item} />
			</li>
		)
	});
	
	console.log(elements);
	
	return (
		<ul>
			{elements}
		</ul>
	);
};

export default TodoList;