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
		console.log(e.target.value);
		
		this.setState(
			{
				label: e.target.value
			}
		)
	}
	
	onFormSubmit(e) {
		e.preventDefault();
		this.props.onTodoAdd(this.state.label);
		e.target.reset();
	}
	
	render() {
		return (
		<form className="AddTodo d-flex" onSubmit={ this.onFormSubmit.bind(this) }>
			<input type="text"
				className="form-control"
				onChange={ this.onLabelChange.bind(this) }
				placeholder="Что ещё нужно сделать?"
			/>
			<button type="submit"
			className="btn btn-info"
			>Добавить</button>
		</form>
		);
	}
}

export default AddTodo;