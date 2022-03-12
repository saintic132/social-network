import React from 'react';
import s from "./Content.module.css";
import MainLogo from "./MainLogo/MainLogo";
import Profile from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import Error404 from "../../../404/Error404";
import {StateType} from "../../../App";
import DialogsContainer from "./Dialogs/DialogsContainer";


function Content(props: StateType) {
    return (
        <div className={s.content}>
                <MainLogo/>
                <Routes>
                    <Route
                        path="/"
                        element={<Profile
                            store={props.store}
                        />}
                    />
                    <Route
                        path="dialogs/*"
                        element={
                            <DialogsContainer
                                store={props.store}
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