import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {ActionsType, RootStateType} from "./redux/redux-store";

export type StateType = {
    state: RootStateType
    dispatch: (action: ActionsType) => void
}

function App(props: StateType) {

    return (

        <div className={s.app}>
            <Header />
            <Main
                state={props.state}
                dispatch={props.dispatch}
            />
            <Footer />
        </div>
    );
}

export default App;
