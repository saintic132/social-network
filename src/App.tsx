import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {RootStateType} from "./redux/state";

export type StateType = {
    state: RootStateType
    addNewMessage: (message: string, time: string) => void
}

function App(props: StateType) {

    return (

        <div className={s.app}>
            <Header />
            <Main
                state={props.state}
                addNewMessage={props.addNewMessage}
            />
            <Footer />
        </div>
    );
}

export default App;
