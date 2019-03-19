import React from 'react';

import './ItemStatusFilter.css';

class ItemStatusFilter extends React.Component {
	
	constructor() {
		super();
		
		this.state = {
			activeFilters: 'all',
			buttons: [
				{name: 'all', label: 'All'},
				{name: 'active', label: 'Active'},
				{name: 'done', label: 'Done'},
			]
		}
	}
	
	onButtonsClick(filter) {
		console.log(filter);
//		let filter = e.target.textContent.toLowerCase();
		
		this.setState({
			activeFilters: filter
		})
		
		//калбек
		this.props.onFilter(filter);
	}
	
	setClassForButton(str) {
		let className = 'btn';
		if(str === this.state.activeFilters) className += ' btn-info';
		else className += ' btn-outline-secondary';
		return className;
	}
	
	render() {
		
		let buttons = this.state.buttons.map(item => {
			return (
				<button type="button"
              className={this.setClassForButton(item.name)}
              key={item.name}
              onClick={ () => { this.onButtonsClick(item.name) } }
              >{item.label}</button>
			)
		})
		
		
		return (
    <div className="btn-group">
      {buttons}
    </div>
  );
	}
}

export default ItemStatusFilter;
