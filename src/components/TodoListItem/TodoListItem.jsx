import React from 'react';
import './TodoListItem.css';


class TodoListItem extends React.Component {
	
	state = {
		done: false,
		important: false,
	};
	
//Если состояние зависит от предыдущего состояния (инверсия св-ва, увеличения счётчика), то нужно обязательно использовать функцию внутри setState, которая будет получать текущий state. Это нужно т.к. в реакте асинхронность выполнения setState.
	onLabelClick = () => {
		this.setState( (state) => {
			return {
				done: !state.done
			}
		})
	};
	
//Деструктуризация нужного св-ва из state чуть укорачивает код
	onMakeImportant = () => {
		this.setState( ({important}) => {
			return {
				important: !important
			}
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