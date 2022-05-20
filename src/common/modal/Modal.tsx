import React, {useEffect} from 'react';
import style from './Modal.module.css'
import {useAppSelector} from "../../redux/redux-store";

type PropsType = {
    active: boolean
    setActive: (value: boolean) => void
    children: React.ReactNode
}

export const Modal = ({active, setActive, children}: PropsType) => {

    const isAuth = useAppSelector(state => state.auth.isAuth)

    useEffect(() => {
        if (isAuth) {
            setActive(false)
        }
    }, [isAuth, setActive])

    return (
        <div className={active ? `${style.modal} ${style.active}` : style.modal} onClick={() => setActive(false)}>
            <div className={active ? `${style.modal__content} ${style.active}` : style.modal__content}
                 onClick={e => e.stopPropagation()}>
                <div className={style.children}>
                    {children}
                </div>
            </div>
        </div>
    )
}