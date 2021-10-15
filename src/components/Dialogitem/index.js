import React from "react";
import classNames, {className} from "classnames";
import {MessageStatus, Time} from "../";

import "./Dialogitem.scss";
import {format, isToday} from "date-fns";

function getAvatar(avatar) {
    if (avatar) {
        return <img src={avatar} alt=''/>;
    } else {
        //make avatar
    }
}

function getMessageTime(created_at) {
    if (isToday(created_at)) {
        return format(created_at, 'HH:MM')
    } else {
        return format(created_at, 'DD.MM.YYYY')

    }
}

function Dialogitem({user, message, unreaded, isMe}) {
    return (
        <div
            className={classNames("dialog__item", {
                "dialog__item-online": user.isOnline,
            })}>
            <div className='dialog__item-avatar'>
                {/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
                {getAvatar(user.avatar)}
            </div>
            <div className='dialog__item-info'>
                <div className='dialog__item-top'>
                    <b>{user.fullname}</b>
                    {/*<b>Мария ригер</b>*/}
                    <span>
						 {/*<Time date={message.created_at} />*/}
                        {getMessageTime(message.created_at)}
                        {/*13:03*/}
					</span>
                </div>
                <div className='dialog__item-bottom'>
                    <p>
                        {message.text}
                    </p>
                    {isMe && <MessageStatus isMe={true} isReaded={false}/>}
                    {unreaded > 0 && (
                        <div className='dialog__item-notice'>{unreaded > 9 ? "+9" : unreaded}</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dialogitem;
