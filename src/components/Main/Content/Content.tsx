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
import {LoginPage} from "../../LoginPage/LoginPage";
import {useSelector} from "react-redux";
import {ReduxStateType} from "../../../redux/redux-store";


function Content() {

    let isAuth = useSelector<ReduxStateType, boolean>(state => state.auth.isAuth)
    let initializedContent = useSelector<ReduxStateType, boolean>(state => state.content.initialized)

    return (
        <div className={s.content}>
            <MainLogo/>
            {
                initializedContent &&
                <Routes>
                    <Route
                        path="/"
                        element={<SelfProfile/>}
                    />
                    <Route
                        path="login"
                        element={<LoginPage/>}
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
                        path="users/*"
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
                        element={<Settings/>}
                    />
                    <Route
                        path="*"
                        element={<Error404/>}
                    />
                </Routes>
            }

        </div>
    )
}

export default Content;