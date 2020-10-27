import React, { useState } from 'react';
import './App.scss';
import Post from './components/Post';
import data from './data/data.json';

const post = data.feed[0];

function App() {
	const [isLiked, setIsLiked] = useState(post.isLiked);
	const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked);

	const likePost = () => {
		setIsLiked(!isLiked);
	};

	const bookmarkPost = () => {
		setIsBookmarked(!isBookmarked);
	};

	return (
		<div className='App'>
			<Post
				post={post}
				likePost={likePost}
				isLiked={isLiked}
				bookmarkPost={bookmarkPost}
				isBookmarked={isBookmarked}
			/>
		</div>
	);
}

export default App;
