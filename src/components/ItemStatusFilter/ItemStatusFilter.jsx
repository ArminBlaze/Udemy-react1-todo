import React from 'react';

import './ItemStatusFilter.css';

class ItemStatusFilter extends React.Component {
	
	constructor() {
		super();
		
		this.state = {
			buttons: [
				{name: 'all', label: 'All'},
				{name: 'active', label: 'Active'},
				{name: 'done', label: 'Done'},
			]
		}
	}
	
	onButtonsClick(filter) {
		this.props.onFilter(filter);
	}
	
	setClassForButton(str) {
		let activeFilter = this.state.activeFilters;
		let className = 'btn ';
		className += (str === activeFilter) ? 'btn-info' : 'btn-outline-secondary';
		return className;
	}
	
	
	render() {
		const {activeFilter, onFilterChange} = this.props;
		
		let buttons = this.state.buttons.map( ({name, label}) => {
			let className = (name === activeFilter) ? 'btn-info' : 'btn-outline-secondary';
			
			return (
				<button type="button"
              className={`btn ${className}`}
              key={name}
              onClick={ () => onFilterChange(name) }
              >{label}</button>
			)
		});
		
		
		return (
    <div className="btn-group">
      {buttons}
    </div>
  );
	}
}

export default ItemStatusFilter;
