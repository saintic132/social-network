import React from 'react';
import s from "./Content.module.css";
import MainLogo from "./MainLogo/MainLogo";
import SelfProfile from "./SelfProfile/SelfProfile";
import {Route, Routes} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import Error404 from "../../../404/Error404";
import {Profile} from "./Profile/Profile";
import {Users} from "./Users/Users";
import Dialogs from "./Dialogs/Dialogs";
import {useAppSelector} from "../../../redux/redux-store";
import {LoginForm} from "../../LoginPage/LoginForm";

function Content() {

    const isAuth = useAppSelector(state => state.auth.isAuth)

    return (
        <div className={s.content}>
            <MainLogo/>
            <Routes>
                <Route
                    path="/"
                    element={<SelfProfile/>}
                />
                <Route
                    path="profile/:userId"
                    element={<Profile/>}
                />
                <Route
                    path="dialogs"
                    element={<Dialogs isAuth={isAuth}/>}
                />
                <Route
                    path="users"
                    element={<Users/>}
                />
                <Route
                    path="news"
                    element={<News/>}
                />
                <Route
                    path="music"
                    element={<Music/>}
                />
                <Route
                    path="settings"
                    element={<Settings isAuth={isAuth}/>}
                />
                <Route
                    path="login"
                    element={<LoginForm/>}
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