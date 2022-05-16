import React, {useState} from 'react';
import s from './ProfileStatus.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ReduxStateType} from "../../../../../redux/redux-store";
import {setSelfStatusThunk} from "../../../../../redux/profile-reducer";


export function ProfileStatus() {

    let [inputStatusValue, setInputStatusValue] = useState<string>('');
    let [toggleChangeStatus, setToggleChangeStatus] = useState<boolean>(false);
    let [errorMaxLength, setErrorMaxLength] = useState<boolean>(false);
    let status = useSelector<ReduxStateType, string | null>(state => state.profilePage.selfStatus)
    let isAuth = useSelector<ReduxStateType, boolean>(state => state.auth.isAuth)
    let dispatch = useDispatch()

    const onClickChangeToEditStatus = () => {
        setToggleChangeStatus(true)
        if (status)
            setInputStatusValue(status)
    }

    const onChangeStatusValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length <= 300) {
            setInputStatusValue(e.currentTarget.value)
            setErrorMaxLength(false)
        } else {
            setErrorMaxLength(true)
        }
    }

    const onBlurEditStatus = () => {
        setToggleChangeStatus(false)
        setErrorMaxLength(false)
    }

    const onEnterClickToChangeStatus = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(setSelfStatusThunk(inputStatusValue))
            setToggleChangeStatus(false)
        }
    }

    if (!isAuth) return <></>

    return (
        <div className={s.profileStatusContainer}>
            {
                status
                    ? <div className={s.status} onClick={onClickChangeToEditStatus}>Status: {status}</div>
                    : <div
                        className={s.noneStatus}
                        onClick={onClickChangeToEditStatus}
                    >
                        установить статус
                    </div>
            }

            {
                toggleChangeStatus &&
                <input
                    type="text"
                    className={s.editStatus}
                    value={inputStatusValue}
                    onChange={onChangeStatusValue}
                    autoFocus
                    onBlur={onBlurEditStatus}
                    onKeyPress={onEnterClickToChangeStatus}
                />
            }
            {
                toggleChangeStatus &&
                <div className={s.maxLength}>
                    {
                        !errorMaxLength
                            ? <span><span>Max length - 300. Now</span><span> {inputStatusValue.length}</span></span>
                            : <span className={errorMaxLength ? s.errorLength : ''}>Max length !!!</span>
                    }
                </div>
            }

        </div>

    )
}