import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Media from '../Media';
import './Post.scss';

function Post({ post, likePost, isLiked }) {
	return (
		<div className='Post'>
			<Header post={post} />
			<Media post={post} />
			<Footer likePost={likePost} isLiked={isLiked} />
		</div>
	);
}

export default Post;
