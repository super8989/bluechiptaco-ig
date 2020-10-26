import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

function Header() {
	return (
		<div className='Header'>
			<div className='Header__left'>
				<img src='https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ' />
				<div className='Header__left--username'>
					<span>Username</span>
					<span>sponsored</span>
				</div>
			</div>
			<div className='Header__right'>
				<FontAwesomeIcon icon={faEllipsisH} />
			</div>
		</div>
	);
}

export default Header;
