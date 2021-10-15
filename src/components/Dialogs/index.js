import React from "react";
import classNames, {className} from "classnames";

import {Dialogitem} from "../index";

import "./Dialogs.scss";


function Dialogs({items, userId}) {
    return (
        <div className="dialogs">
            {
                items.map((item, index) => {
                    return <Dialogitem
                        user={item.user}
                        unreaded={0}
                        message={item}
                        key={index}
                        isMe={item.user._id === userId}
                    />
                })
            }

        </div>
    );
}

export default Dialogs;
