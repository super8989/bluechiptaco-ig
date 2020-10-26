import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Media from '../Media';
import './Post.scss';

function Post() {
	return (
		<div className='Post'>
			<Header />
			<Media />
			<Footer />
		</div>
	);
}

export default Post;
