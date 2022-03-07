import React from 'react';
import s from "./Main.module.css";
import Nav from "./Nav/Nav";
import Content from "./Content/Content";
import {RootStateType} from "../../App";

export type StateType = {
    state: RootStateType
    addNewMessage: (message: string) => void
}

function Main (props: StateType) {
    return (
        <div className={s.main}>
            <Nav/>
            <Content
                state={props.state}
                addNewMessage={props.addNewMessage}
            />

        </div>
    )
}

export default Main;