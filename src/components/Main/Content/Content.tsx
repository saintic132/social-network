import React from 'react';
import s from "./Content.module.css";
import MainLogo from "./MainLogo/MainLogo";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import {Route, Routes} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

function Content() {
    return (
        <div className={s.content}>
            <MainLogo/>
            <Routes>
                <Route
                    path="/" element={<Profile />}
                />
                <Route
                    path="messages" element={<Messages />}
                />
                <Route
                    path="news" element={<News />}
                />
                <Route
                    path="music" element={<Music />}
                />
                <Route
                    path="Settings" element={<Settings />}
                />
            </Routes>
        </div>
    )
}

export default Content;