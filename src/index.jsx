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
		
		this.maxId = 100;
		
		this.state = {
			todoData: [
				this.createTodoItem('Drink Coffee'),
				this.createTodoItem('Make Awesome App'),
				this.createTodoItem('Have a lunch'),
			],
			
			activeFilters: 'all',
			searchStr: '',
			filteredTodoData: null,
		}
	}
	
	
	createTodoItem(label) {
		return {
			label: label,
			important: false,
			done: false,
			id: this.maxId++
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
	
	
	onTodoAdd(text) {
		this.setState( ({todoData}) => {
			let newTodoData = todoData.slice();
			var newTodo = this.createTodoItem(text);
			newTodoData.push(newTodo);
			
			return {
				todoData: newTodoData
			}
		})
	}
	
	
	onTodoDone(id) {
		this.toggleProperty("done", id);
	}
	
	onTodoImportant(id) {
		this.toggleProperty("important", id);
	}
	
	toggleProperty(prop, id) {
			this.setState( ({todoData}) => {
			
			//ищём в массиве нужный элемент, который для callback вернёт true
			const i = todoData.findIndex((item) => item.id === id);
			
			let newTodoData = todoData.slice();
			let newTodo = Object.assign({}, newTodoData[i]);
			newTodo[prop] = !newTodo[prop];
			newTodoData[i] = newTodo;
			
			return {
				todoData: newTodoData
			}
		})
	}
	
	setProperty(prop, value) {
		console.log(this.state[prop]);
		
		this.setState({
			[prop]: value
		})
	}
	
	onSearch(text) {
		console.log(text);
		
	
		
		console.log(this.state.searchStr);
		
		this.filterTodos({
			searchStr: text
		});
	}
	
	filterTodos(options) {
		debugger;
		let searchStr = (options.hasOwnProperty('searchStr')) ? options.searchStr : this.state.searchStr;
		let activeFilters = (options.hasOwnProperty('activeFilters')) ? options.activeFilters : this.state.activeFilters;
		
		//отфильтровать 
		const {todoData} = this.state;
		
		//добавить в новый массив только элементы которые соответствуют фильтрам и поисковой строке
		const newArr = todoData.filter( item => {
			return isFilterMatch(item) && isSearchMatch(item)
		})
		
		console.log(newArr);
		
		//установить searchStr или activeFilters в setState
		//установить newArr в filteredTodoData
//		debugger;
		this.setProperty('filteredTodoData', newArr);
		
		(options.searchStr) ? 
			this.setProperty('searchStr', searchStr) : 
			this.setProperty('activeFilters', activeFilters);
		
		
		//тут ищем совпадение строки поиска с todo именем
		function isSearchMatch(item) {
			//проверять что item.label начинается с searchStr
			return ~item.label.toLowerCase().indexOf(searchStr.toLowerCase())
		}
		
		//тут проверяем совпадение с фильтрами
		function isFilterMatch(item) {
			return true;
		}
	}
	
	
	render() {
		const isLoggedIn = false;
		const loginBox = <span>Log in please</span>;
		const welcomeBox = <span>Welcome Back!</span>;
		
		const {todoData} = this.state;
		const filteredTodoData = this.state.filteredTodoData || todoData;
		
		const doneCount = todoData.filter((el) => el.done).length;
		const leftCount = todoData.length - doneCount;
		
		
		
		return (
			<div className="todo-app">
				{isLoggedIn ? welcomeBox : loginBox}
				<AppHeader toDo={leftCount} done={doneCount} />
				<div className="top-panel d-flex">
					<SearchPanel onSearch={ this.onSearch.bind(this) } />
					<ItemStatusFilter />
				</div>
				<TodoList 
					todos={filteredTodoData}
					//передаём списку ф-цию обратного вызова
					onDeletedInApp={ this.deleteFromData.bind(this) } 
					onTodoDone={ this.onTodoDone.bind(this) }
					onTodoImportant={ this.onTodoImportant.bind(this) }
				/>
				<AddTodo onTodoAdd={ this.onTodoAdd.bind(this) } />
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
