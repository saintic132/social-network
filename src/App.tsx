import React, {useEffect} from 'react';
import s from './App.module.css';
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {ReduxStateType} from "./redux/redux-store";
import {authThunk, InitialAuthStateType} from "./redux/auth-reducer";

function App() {

    let initializedContent = useSelector<ReduxStateType, boolean>(state => state.content.initialized)
    let headerState = useSelector<ReduxStateType, InitialAuthStateType>(state => state.auth)

    let dispatch = useDispatch()


    useEffect(() => {
        if (!headerState.isAuth) {
            dispatch(authThunk())
        }
    }, [dispatch, headerState.isAuth])

    return (
        <div>
            {
                initializedContent && <div className={s.app}>

                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            }
        </div>)
}

export default App;
