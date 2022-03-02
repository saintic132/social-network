import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {RootStateType} from "./redux/state"

export type StateType = {
    state: RootStateType
}

function App(props:StateType) {
    return (
        <div className={s.app}>
            <Header />
            <Main
                state={props.state}
            />
            <Footer />
        </div>
    );
}

export default App;
