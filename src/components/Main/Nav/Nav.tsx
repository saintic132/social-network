import React from 'react';
import s from "./Nav.module.css";
import Messages from "./Messages/Messages";

function Nav() {
    return (
        <div className={s.nav}>
            <div>Profile</div>
            <Messages
                name='Messages'
            />
            <div>News</div>
            <div>Music</div>
            <div>Settings</div>
        </div>
    )
}

export default Nav;