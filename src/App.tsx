import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {ActionsType, ReduxStateType} from "./redux/redux-store";
import {Store} from "redux";

export type StateType = {
    store: Store<ReduxStateType, ActionsType>
}

function App(props: StateType) {

    return (

        <div className={s.app}>
            <Header/>
            <Main
                store={props.store}
            />
            <Footer/>
        </div>
    );
}

export default App;
