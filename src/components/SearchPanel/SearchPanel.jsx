import React from 'react';

import './SearchPanel.css';

const SearchPanel = () => {
	const searchText = "Start typing for search";
	
	return (
		<input 
		className="form-control SearchPanel"
		placeholder={searchText}
		type="text"/>
	);
}

export default SearchPanel;