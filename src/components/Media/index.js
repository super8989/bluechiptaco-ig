import React from 'react';
import './Media.scss';

function Media({ post }) {
	return (
		<div className='Media'>
			<img src={post.media.uuid} alt={post.title} />
		</div>
	);
}

export default Media;
