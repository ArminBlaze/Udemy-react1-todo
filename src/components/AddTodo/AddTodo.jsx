import React from 'react';
import './AddTodo.css';

class AddTodo extends React.Component {
	
	constructor() {
		super();
		
		this.state = {
			label: '',
		}
	}
	
	
	onLabelChange(e) {
		this.setState({
				label: e.target.value
		})
	}
	
	onFormSubmit(e) {
		e.preventDefault();
		this.props.onTodoAdd(this.state.label);
		
		//Очищаем форму не через reset(), т.к. reset не сбросит state
		//При изменении state - запустится render и у input будет очищено значение
		//Интересный факт. Событие onchange input'а не вызывается ни при form.reset(), ни при изменении input.value
		this.setState({
			label: ''
		})
	}
	
	render() {
		return (
		<form className="AddTodo d-flex" onSubmit={ this.onFormSubmit.bind(this) }>
			<input type="text"
				className="form-control"
				onChange={ this.onLabelChange.bind(this) }
				placeholder="Что ещё нужно сделать?"
				value={ this.state.label }
			/>
			<button type="submit"
			className="btn btn-info"
			>Добавить</button>
		</form>
		);
	}
}

export default AddTodo;