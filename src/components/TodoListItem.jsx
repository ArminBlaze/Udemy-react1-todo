import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({label, important = false}) => {
	
	const style = {
		color: important ? "tomato" : "",
		fontWeight: important ? 'bold' : ''
	};
	
	return (
//		<span style={style} className="todoListItem">{label}</span>
		
		<span className="TodoListItem">
      <span
        className="TodoListItem__label"
        style={style}>
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
};

export default TodoListItem;