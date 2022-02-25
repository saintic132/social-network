import React from 'react';
import s from "../../App.module.css";

function Header() {
    return (
        <div className={s.header}>
            <img
                className={s.headerImgLogo}
                src="https://static.vecteezy.com/system/resources/previews/001/188/239/non_2x/heart-logo-png.png"
                alt="logo"/>
            <div className={s.nameLogo}>
                Social-Network
            </div>
        </div>
    )
}

export default Header;