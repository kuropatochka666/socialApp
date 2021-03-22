import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { MessageStatus, Time } from "../";

import "./Message.scss";

const Message = ({
	avatar,
	user,
	text,
	date,
	isMe,
	isReaded,
	attachments,
	isTyping,
}) => {
	return (
		<section
			className={classNames("message", {
				"message-user": isMe,
				"message-typing": isTyping,
				"message-image": attachments && attachments.length === 1,
			})}>
			<div className='message__avatar'>
				<img src={avatar} alt={`Avatar ${user.fullname}`} />
			</div>
			<div className='message__content'>
				<div className='message__attachments'>
					{attachments &&
						attachments.map((item, i) => (
							<div className='message__attachments-item' key={i}>
								<img src={item.url} alt={item.filename} />
							</div>
						))}
				</div>
				<div>
					{(text || isTyping) && (
						<div className='message__bubble'>
							{text && <p className='message__text'>{text}</p>}
							{isTyping && (
								<div className='message__typing'>
									<span></span>
									<span></span>
									<span></span>
								</div>
							)}

							<MessageStatus isMe={isMe} isReaded={isReaded} />
						</div>
					)}

					{date && (
						<time className='message__date'>
							<Time date={date}></Time>
						</time>
					)}
				</div>
			</div>
		</section>
	);
};

Message.defaultProps = {
	user: {},
};

Message.propTypes = {
	avatar: PropTypes.string,
	text: PropTypes.string,
	date: PropTypes.instanceOf(Date),
	user: PropTypes.object,
	attachments: PropTypes.array,
	isTyping: PropTypes.bool,
	isMe: PropTypes.bool,
	isReaded: PropTypes.bool,
};

export default Message;
