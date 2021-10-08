import React from "react";
import classNames, { className } from "classnames";
import { MessageStatus, Time } from "../";

import "./Dialogitem.scss";

function getAvatar(avatar) {
	if (avatar) {
		return <img src={avatar} alt='' />;
	} else {
		//make avatar
	}
}

function Dialogitem({ user, lastMessage, unreaded }) {
	return (
		<div
			className={classNames("dialog__item", {
				"dialog__item-online": user.isOnline,
			})}>
			<div className='dialog__item-avatar'>
				{/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
				{getAvatar(
					"https://sun3-10.userapi.com/s/v1/ig2/ivAQWpiptCSriFTRVuJ4n2mz2YnURl-GOIltzJ3Y-7NOVlA24ghML8sguMdpsntOk6KCbC1rPrrHvqTYuJAUlVII.jpg?size=100x0&quality=96&crop=10,0,949,949&ava=1"
				)}
			</div>
			<div className='dialog__item-info'>
				<div className='dialog__item-top'>
					{/* <span>{user.fullname}</span> */}
					<b>Мария ригер</b>
					<span>
						{/* <Time date={new Date()} /> */}
						13:03
					</span>
				</div>
				<div className='dialog__item-bottom'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
						tincidunt varius consequat. Vivamus maximus arcu at laoreet
						malesuada. Fusce id nulla nec ex dictum sollicitudin ut nec velit.
					</p>
					{/* <MessageStatus isMe={true} isReaded={false} /> */}
					{unreaded > 0 && (
						<div className='dialog__item-notice'>{unreaded}</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Dialogitem;
