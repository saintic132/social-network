import React from 'react';
import s from "./Nav.module.css";

function Nav() {
    return (
            <div className={s.nav}>
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
                <div>Settings</div>
            </div>
    )
}

export default Nav;