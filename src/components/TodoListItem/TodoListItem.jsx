import React from 'react';
import './TodoListItem.css';


class TodoListItem extends React.Component {
	
	constructor() {
		super();
		
		this.state = {
			done: false,
		}
	}
	
	onLabelClick = () => {
		console.log(this);
		console.log(`Hi! ${this.props.label}`)
	}
	
	render() {
		
		const {label, important = false} = this.props;
		
		const style = {
			color: important ? "tomato" : "",
			fontWeight: important ? 'bold' : ''
		};
		
		
	
		return (
			<span className="TodoListItem">
				<span
					className="TodoListItem__label"
					style={style}
					onClick={ this.onLabelClick }
					>
					{label}
				</span>

				<button type="button"
								className="btn btn-outline-success btn-sm float-right">
					<i className="fa fa-exclamation" />
				</button>

				<button type="button"
								className="btn btn-outline-danger btn-sm float-right">
					<i className="fa fa-trash-o" />
				</button>
			</span>
		);
	}
}


export default TodoListItem;