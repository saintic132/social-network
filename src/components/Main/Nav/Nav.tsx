import React from 'react';
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <div className={s.nav}>
            <div>
                <NavLink to='/'>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/messages'>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
        </div>
    )
}

export default Nav;