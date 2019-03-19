import React from 'react';

import './SearchPanel.css';

const searchText = "Start typing for search";

class SearchPanel  extends React.Component {
	
	
	
	onSearchInput(e) {
		this.props.onSearch(e.target.value);
	}

	render() {
		
		return (
			<input 
			className="form-control SearchPanel"
			placeholder={searchText}
			onChange={ this.onSearchInput.bind(this) }
			type="text"/>
		);
	}
	
}

export default SearchPanel;