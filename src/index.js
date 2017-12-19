import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyBNYBgfDAMHUBCmys1m0ah85S5d81qJDbs';

// create a new component. This component should produce some html
// This is the app class

class App extends React.Component {
	constructor(props) {
		super(props);

		// Data the app will monitor, when it changes, components will re render
		this.state = {videos: [], pictures: []};


		YTSearch({key: API_KEY, term:'surfboards'}, (videos) => {
			this.setState({videos: videos});
		});
	}

	render() {
		return (

			//JSX - The syntax is intended to be used by preprocessors (i.e., transpilers like Babel) to transform HTML-like text found in JavaScript files into standard JavaScript objects that a JavaScript engine will parse.
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} pics={this.state.pictures}/>
			</div>
			// passing data like this is knownn as passinng props (prop video)
		);
	}
}

// take componennts html annd put in DOM
ReactDom.render(<App />, document.querySelector('.container'));
//instance of app class created using jsx tag
