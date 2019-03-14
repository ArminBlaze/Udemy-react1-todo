import React from 'react';
import './AddTodo.css';

class AddTodo extends React.Component {
	
	render() {
		return (
		<div className="AddTodo d-flex">
			<button type="button"
			className="btn btn-info"
			onClick={ () => this.props.onAddTodo('Hello Peka!') }
			>Добавить элемент</button>
		</div>
		);
	}
}

export default AddTodo;