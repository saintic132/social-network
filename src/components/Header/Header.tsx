import React, {useEffect} from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {authThunk, InitialAuthStateType} from "../../redux/auth-reducer";

function Header() {

    let headerState = useSelector<ReduxStateType, InitialAuthStateType>(state => state.auth)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(authThunk())
    }, [dispatch])

    return (
        <div className={s.header__body}>
            <div className={s.header__img}>
                <NavLink to='/'>
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/001/188/239/non_2x/heart-logo-png.png"
                        alt="logo"
                        title='На главную страницу'
                    />
                </NavLink>
            </div>
            <div className={s.header__title}>
                <div className={s.header__text}>
                    <h1>Social-Network</h1>
                </div>
            </div>
            <div className={s.login}>

                {headerState.isAuth ?
                    <div className={s.login__name}>
                        {headerState.login}
                    </div>
                    :
                    <NavLink to='login' title='Login'>
                        <div className={s.login__name}>
                            Login
                        </div>
                    </NavLink>
                }
            </div>
        </div>
    )
}

export default Header;