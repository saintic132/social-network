import React from 'react';
import s from "./Content.module.css";
import MainLogo from "./MainLogo/MainLogo";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import Error404 from "../../../404/Error404";
import {StateType} from "../../../App";


function Content(props: StateType) {
    return (
        <div className={s.content}>
                <MainLogo/>
                <Routes>
                    <Route
                        path="/"
                        element={<Profile
                            state={props.state}
                            dispatch={props.dispatch}
                        />}
                    />
                    <Route
                        path="dialogs/*"
                        element={
                            <Dialogs
                                state={props.state}
                                dispatch={props.dispatch}
                            />}
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