import React, {useEffect, useState} from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {authThunk, InitialAuthStateType, logoutThunk} from "../../redux/auth-reducer";

function Header() {

    let [showOptionUser, setShowOptionUser] = useState<boolean>(false);
    let headerState = useSelector<ReduxStateType, InitialAuthStateType>(state => state.auth)
    let dispatch = useDispatch()

    const clickToToggleLoginMenu = () => {
        setShowOptionUser(!showOptionUser)
    }

    const clockToLogOut = () => {
        dispatch(logoutThunk())
        setShowOptionUser(!showOptionUser)
    }

    useEffect(() => {
        if (!headerState.isAuth) {
            dispatch(authThunk())
        }
    }, [dispatch, headerState.isAuth])

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
                <h1>Social-Network</h1>
            </div>
            <div className={s.login}>

                {
                    headerState.isAuth ?
                        <div className={s.login__container}>
                            <div className={s.login__name}
                                 onClick={clickToToggleLoginMenu}
                                 onBlur={clickToToggleLoginMenu}
                                 onFocus={clickToToggleLoginMenu}
                            >
                                {headerState.login}
                            </div>
                            {
                                showOptionUser &&
                                <div style={{fontSize: '12px', marginTop: '5px'}}>
                                    <button onClick={clockToLogOut}>Logout</button>
                                </div>
                            }

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