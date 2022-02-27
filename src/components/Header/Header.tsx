import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className={s.header}>
            <NavLink to='/'>
                <img
                    className={s.headerImgLogo}
                    src="https://static.vecteezy.com/system/resources/previews/001/188/239/non_2x/heart-logo-png.png"
                    alt="logo"
                    title='На главную страницу'
                />
            </NavLink>
            <div className={s.nameLogo}>
                Social-Network
            </div>
        </div>
    )
}

export default Header;