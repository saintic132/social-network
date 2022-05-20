import React, {useEffect} from 'react';
import style from './Modal.module.css'
import {useAppSelector} from "../../redux/redux-store";
import {useNavigate} from "react-router-dom";

type PropsType = {
    active: boolean
    setActive: (value: boolean) => void
    children: React.ReactNode
}

export const Modal = ({active, setActive, children}: PropsType) => {

    const isAuth = useAppSelector(state => state.auth.isAuth)
    const nav = useNavigate()

    useEffect(() => {
        if (isAuth) {
            setActive(false)
            nav('/')
        }
    }, [isAuth, setActive])

    return (
        <div className={active ? `${style.modal} ${style.active}` : style.modal} onClick={() => setActive(false)}>
            <div className={active ? `${style.modal__content} ${style.active}` : style.modal__content}
                 onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}