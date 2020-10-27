import React from 'react';
import './App.scss';
import Post from './components/Post';
import data from './data/data.json';

// const post = data.feed[0];

function App() {
	return (
		<div className='App'>
			{/* <Post post={post} /> */}
			{data.feed.map((post, index) => {
				return <Post key={index} post={post} />;
			})}
		</div>
	);
}

export default App;
