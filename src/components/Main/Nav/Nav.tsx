import React from 'react';
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const setActive = (navData:any) => navData.isActive ? s.active : ''

function Nav() {
    return (
        <div className={s.nav}>
            <div>
                <NavLink to='/' className={setActive}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={setActive}>Dialogs</NavLink>
            </div>
            <div>
                <NavLink to='/users' className={setActive}>Users</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={setActive}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={setActive}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={setActive}>Settings</NavLink>
            </div>
        </div>
    )
}

export default Nav;