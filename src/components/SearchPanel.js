import React from 'react';

const SearchPanel = () => {
	const searchText = "Start typing for search";
	const searchStyle = {
		fontSize: '18px',
	}
	
	return (
		<input 
		style={searchStyle}
		placeholder={searchText}
		type="text"/>
	);
}

export default SearchPanel;