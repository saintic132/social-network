import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className={s.header__body}>
            <div className={s.header__img}>
                <NavLink to='/'>
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/001/188/239/non_2x/heart-logo-png.png"
                        alt="logo"
                        title='На главную страницу'
                    />
                </NavLink>
            </div>
            <div className={s.header__title}>
                <div className={s.header__text}>
                    Social-Network
                </div>
            </div>
        </div>
    )
}

export default Header;