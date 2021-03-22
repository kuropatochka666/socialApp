import React from "react";
import PropTypes from "prop-types";

import readedSvg from "../../assets/img/readed.svg";
import noReadedSvg from "../../assets/img/noreaded.svg";

function MessageStatus({ isMe, isReaded }) {
	return isMe && isReaded ? (
		<img src={readedSvg} alt='' className='message__checked-icon' />
	) : (
		<img src={noReadedSvg} alt='' className='message__checked-icon' />
	);
}
MessageStatus.propTypes = {
	isMe: PropTypes.bool,
	isReaded: PropTypes.bool,
};

export default MessageStatus;
