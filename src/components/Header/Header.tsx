import React, {useState} from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../redux/redux-store";
import {logoutThunk} from "../../redux/auth-reducer";
import {Modal} from "../../common/modal/Modal";
import {LoginForm} from "../LoginPage/LoginForm";

function Header() {

    const [showOptionUser, setShowOptionUser] = useState<boolean>(false)
    const headerState = useAppSelector(state => state.auth)
    const [modalActive, setModalActive] = useState<boolean>(false);


    const dispatch = useDispatch()

    const clickToToggleLoginMenu = () => {
        setShowOptionUser(!showOptionUser)
    }

    const clockToLogOut = () => {
        dispatch(logoutThunk())
        setShowOptionUser(!showOptionUser)
    }

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
                        <div className={s.login__name} onClick={() => setModalActive(true)}>
                            Login
                        </div>
                }
                <Modal active={modalActive} setActive={setModalActive}>
                    <LoginForm />
                </Modal>

            </div>
        </div>
    )
}

export default Header;