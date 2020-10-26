import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHeart,
	faComment,
	faPaperPlane,
	faBookmark,
} from '@fortawesome/free-regular-svg-icons';

import './Footer.scss';

function Footer() {
	return (
		<div className='Footer'>
			<div className='Footer__left'>
				<FontAwesomeIcon icon={faHeart} />
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
