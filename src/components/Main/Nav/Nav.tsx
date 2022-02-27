import React from 'react';
import s from "./Nav.module.css";

function Nav() {
    return (
        <div className={s.nav}>
            <div>
                <a href='/profile'>Profile</a>
            </div>
            <div>
                <a href='/messages'>Messages</a>
            </div>
            <div>
                <a href='/news'>News</a>
            </div>
            <div>
                <a href='/music'>Music</a>
            </div>
            <div>
                <a href='/settings'>Settings</a>
            </div>
        </div>
    )
}

export default Nav;