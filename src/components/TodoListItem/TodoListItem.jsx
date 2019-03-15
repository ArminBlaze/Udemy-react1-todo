import React from 'react';
import './TodoListItem.css';


class TodoListItem extends React.Component {
	
	render() {
		
		const {label, done, important = false} = this.props;
//		const {done, important} = this.state;
		
		let classNames = `TodoListItem`;
		
		if(done) {
			classNames += ` done`;
		}
		
		if(important) {
			classNames += ` important`;
		}
		
		return (
			<span className={classNames}>
				<span
					className="TodoListItem__label"
					onClick={ this.props.onTodoDone }
					>
					{label}
				</span>

				<button type="button"
								className="btn btn-outline-success btn-sm float-right"
								onClick={ this.props.onTodoImportant }
								>
					<i className="fa fa-exclamation" />
				</button>

				<button type="button"
								className="btn btn-outline-danger btn-sm float-right"
								onClick={ this.props.onDeletedInList }
								>
					<i className="fa fa-trash-o" />
				</button>
			</span>
		);
	}
}


export default TodoListItem;