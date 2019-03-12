import React from 'react';
import './TodoListItem.css';


class TodoListItem extends React.Component {
	
	state = {
		done: false,
		important: false,
	};
	
	onLabelClick = () => {
		console.log(this);
		console.log(`Hi! ${this.props.label}`)
		this.setState({
			done: !this.state.done
		});
	};
	
	onMakeImportant = () => {
		this.setState({
			important: !this.state.important
		});
	};
	
	render() {
		
		const {label} = this.props;
		const {done, important} = this.state;
		
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
					onClick={ this.onLabelClick }
					>
					{label}
				</span>

				<button type="button"
								className="btn btn-outline-success btn-sm float-right"
								onClick={ this.onMakeImportant }
								>
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