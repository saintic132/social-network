import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";

function Header(props: HeaderPropsType) {
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

                {props.isAuth ?
                    <div className={s.login__name}>
                        {props.login}
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