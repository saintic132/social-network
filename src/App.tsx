import React, {useEffect} from 'react';
import s from './App.module.css';
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {useDispatch} from "react-redux";
import {useAppSelector} from "./redux/redux-store";
import {authThunk} from "./redux/auth-reducer";

function App() {

    const initializedContent = useAppSelector(state => state.content.initialized)
    const headerState = useAppSelector(state => state.auth)

    const dispatch = useDispatch()


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
