import React from 'react';
import s from "./Content.module.css";
import MainLogo from "./MainLogo/MainLogo";
import Profile from "./Profile/Profile";

function Content() {
    return (
        <div className={s.content}>
            <MainLogo/>
            <Profile />
        </div>
    )
}

export default Content;