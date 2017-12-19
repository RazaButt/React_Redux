import React from 'react';
import ReactDom from 'react-dom'


// create a class that has all the properties of react.componennt
class SearchBar extends React.Component {

	// all classes have a contructor method, used to set state
	constructor(props) {
		super(props);

		this.state = { term: ''};
	}

	render() {
		return (
			<div>
				<input 
				value={this.state.term}
				onChange={ event => {this.setState({term: event.target.value})}} />;
				value of input: {this.state.term}
			</div>
		);
	}
}

export default SearchBar;