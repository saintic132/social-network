import React from 'react';
import s from "./Main.module.css";
import Nav from "./Nav/Nav";
import Content from "./Content/Content";

function Main() {
    return (
        <div className={s.main}>

            <Nav />
            <Content />
        </div>
    )
}

export default Main;