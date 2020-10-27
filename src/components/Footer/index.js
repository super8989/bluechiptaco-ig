import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHeart,
	faComment,
	faPaperPlane,
	faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import {
	faHeart as fasHeart,
	faBookmark as fasBookmark,
} from '@fortawesome/free-solid-svg-icons';

import './Footer.scss';

function Footer({ likePost, isLiked }) {
	return (
		<div className='Footer'>
			<div className='Footer__left'>
				{isLiked ? (
					<FontAwesomeIcon
						icon={fasHeart}
						className='likedHeart'
						onClick={() => likePost()}
					/>
				) : (
					<FontAwesomeIcon icon={faHeart} onClick={() => likePost()} />
				)}

				<FontAwesomeIcon icon={faComment} />
				<FontAwesomeIcon icon={faPaperPlane} />
			</div>
			<div className='Footer__right'>
				<FontAwesomeIcon icon={faBookmark} />
			</div>
		</div>
	);
}

export default Footer;
