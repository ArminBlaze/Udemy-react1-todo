import React from 'react';
import ReactDom from 'react-dom';

//Относительные пути - начинаются с ./ - так будет искаться относительно этого файла
import AppHeader from './components/AppHeader/';
import SearchPanel from './components/SearchPanel/';
import TodoList from './components/TodoList/';
import AddTodo from './components/AddTodo/';
import ItemStatusFilter from './components/ItemStatusFilter/';

import './index.css';


class App extends React.Component {
	
	constructor() {
		super();
		
		this.state = {
			todoData: [
				{label: 'Drink Coffee', id: 1},
				{label: 'Make Awesome App', important: true, id: 2},
				{label: 'Have a lunch', id: 3},
			],
		}
	}
	
	
	deleteFromData(id) {
		console.log(id);
		
		this.setState( ({todoData}) => {
			
			//ищём в массиве нужный элемент, который для callback вернёт true
			const i = todoData.findIndex((item) => item.id === id);
			
			//копируем массив и удаляем из него элемент
			let newTodoData = todoData.slice();
			newTodoData.splice(i, 1);
			
			return {
				todoData: newTodoData
			}
		})
	}
	
	
	onAddTodo(text) {
		this.setState( ({todoData}) => {
			
			const lastIndex = todoData.length - 1;
			
			let newTodoData = todoData.slice();
			
			var newTodo = {
				id: newTodoData[lastIndex].id+1,
				label: text
			}
			newTodoData.push(newTodo);
			
			return {
				todoData: newTodoData
			}
		})
	}
	
	render() {
		const isLoggedIn = false;
		const loginBox = <span>Log in please</span>;
		const welcomeBox = <span>Welcome Back!</span>;

		return (
			<div className="todo-app">
				{isLoggedIn ? welcomeBox : loginBox}
				<AppHeader toDo={1} done={3} />
				<div className="top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter />
				</div>
				<TodoList 
				todos={this.state.todoData}
				//передаём списку ф-цию обратного вызова
				onDeletedInApp={ this.deleteFromData.bind(this) } 
				/>
				<AddTodo onAddTodo={ this.onAddTodo.bind(this) } />
			</div>
		)
	}
	
	
	
}

//Этот код на JSX - его переделает в обычный JS Babel
//const el = (
//	<App />
//)

//Этот код в обычном JS, Но через метод реакта. Babel тут не нужен
//const el = React.createElement('h1', null, 'Hello World!!!');

//ReactDom.render(el, document.getElementById('root'));
ReactDom.render(<App />, document.getElementById('root'));
