import React from 'react';
import VideoListItem from './video_list_item';

// props contains data sent from parent module
const VideoList = (props) => {
	console.log(props);

	// create an array of videoList Items
	const VideoItems = props.videos.map((video) => {
		return <VideoListItem video={video} />
	});

	return (
		<ul className="col-md-4 list-group">
			{VideoItems}
		</ul>
	);
}

export default VideoList;