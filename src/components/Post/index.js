import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Media from '../Media';
import './Post.scss';

function Post({ post, likePost, isLiked, bookmarkPost, isBookmarked }) {
	return (
		<div className='Post'>
			<Header post={post} />
			<Media post={post} />
			<Footer
				likePost={likePost}
				isLiked={isLiked}
				bookmarkPost={bookmarkPost}
				isBookmarked={isBookmarked}
			/>
		</div>
	);
}

export default Post;
