import React from 'react';
import s from './App.module.css';
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {

    return (

        <div className={s.app}>
            <HeaderContainer/>
            <Main
            />
            <Footer/>
        </div>
    );
}

export default App;
