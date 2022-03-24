import React from 'react';
import s from "./Content.module.css";
import MainLogo from "./MainLogo/MainLogo";
import SelfProfile from "./SelfProfile/SelfProfile";
import {Route, Routes} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import Error404 from "../../../404/Error404";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";


function Content() {
    return (
        <div className={s.content}>
            <MainLogo/>
            <Routes>
                <Route
                    path="/"
                    element={<SelfProfile/>}
                />
                <Route
                    path="profile/*"
                    element={<ProfileContainer/>}
                />
                <Route
                    path="dialogs/*"
                    element={
                        <DialogsContainer/>}
                />
                <Route
                    path="users/*"
                    element={
                        <UsersContainer/>}
                />
                <Route
                    path="news/*"
                    element={<News/>}
                />
                <Route
                    path="music/*"
                    element={<Music/>}
                />
                <Route
                    path="settings/*"
                    element={<Settings/>}
                />
                <Route
                    path="*"
                    element={<Error404/>}
                />
            </Routes>
        </div>
    )
}

export default Content;