import React from 'react';

import './ItemStatusFilter.css';

class ItemStatusFilter extends React.Component {
	
	constructor() {
		super();
		
		this.state = {
			activeFilters: 'all',
		}
	}
	
	onButtonsClick(e) {
		let filter = e.target.textContent.toLowerCase();
		
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
		return (
    <div className="btn-group" onClick={ this.onButtonsClick.bind(this) }>
      <button type="button"
              className={this.setClassForButton('all')}
              >All</button>
      <button type="button"
              className={this.setClassForButton('active')}
              >Active</button>
      <button type="button"
              className={this.setClassForButton('done')}
              >Done</button>
    </div>
  );
	}
}

export default ItemStatusFilter;
