import React from 'react';
import TodoListItem from 'components/TodoListItem/';

const TodoList = ({todos, onDeletedInApp}) => {
	
	const elements = todos.map( (item, i) => {
		//используем деструктуризацию. Т.к. label={item.label} important={item.important} - Т.е. имена передаваемых свойств (label и important) Совпадают с именами свойств item.label и item.important. То мы передаём в компонент просто объект item
//		Либо можно вызывать компонент как обычную функцию
//		{TodoListItem(item)}
		const {id, ...rest} = item;
		
		return (
			<li key={id} className="list-group-item">
				<TodoListItem 
				{...rest}
				
				//ещё одно свойство props - это функция callback
				onDeletedInList={() => { 
						console.log('Deleted!');
						onDeletedInApp(id);
					}} 
				/>
			</li>
		)
	});
	
	console.log(elements);
	
	
	return (
		<ul className="list-group todoList">
			{elements}
		</ul>
	);
};

export default TodoList;