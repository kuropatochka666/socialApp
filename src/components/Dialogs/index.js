import React from "react";
import classNames, { className } from "classnames";

import {Dialogitem} from "../index";

import "./Dialogs.scss";



function Dialogs({ items }) {
    return (
        <div className="dialogs">
            {
                items.map((item)=>{
                    <Dialogitem
                        user={item.user}
                        unreaded={0}
                        lastMessage={item.lastMessage}
                    />
                })
            }

        </div>
    );
}

export default Dialogs;
