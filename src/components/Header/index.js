import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

function Header({ post }) {
	return (
		<div className='Header'>
			<div className='Header__left'>
				<img src={post.user.profilePhoto} alt={post.user.username} />
				<div className='Header__left--user'>
					<span className='username'>{post.user.username}</span>
					<span>Sponsored</span>
				</div>
			</div>
			<div className='Header__right'>
				<FontAwesomeIcon icon={faEllipsisH} className='header-menu' />
			</div>
		</div>
	);
}

export default Header;
