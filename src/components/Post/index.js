import React, { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Media from '../Media';
import './Post.scss';

function Post({ post }) {
	const [isLiked, setIsLiked] = useState(post.isLiked);
	const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked);

	const likePost = () => {
		setIsLiked(!isLiked);
	};

	const bookmarkPost = () => {
		setIsBookmarked(!isBookmarked);
	};

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
