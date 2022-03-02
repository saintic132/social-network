import React from 'react';
import s from "./Main.module.css";
import Nav from "./Nav/Nav";
import Content from "./Content/Content";
import {StateType} from "../../App";


function Main (props: StateType) {
    return (
        <div className={s.main}>
            <Nav/>
            <Content
                state={props.state}
            />

        </div>
    )
}

export default Main;