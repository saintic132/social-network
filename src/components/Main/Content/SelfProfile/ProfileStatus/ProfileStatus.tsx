import React, {useState} from 'react';
import s from './ProfileStatus.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ReduxStateType} from "../../../../../redux/redux-store";
import {setStatusThunk} from "../../../../../redux/profile-reducer";


export function ProfileStatus() {
    let [inputStatusValue, setInputStatusValue] = useState<string>();
    let [toggleChangeStatus, setToggleChangeStatus] = useState<boolean>(false);
    let status = useSelector<ReduxStateType, string | null>(state => state.profilePage.status)
    let dispatch = useDispatch()

    const onClickChangeToEditStatus = () => {
        setToggleChangeStatus(true)
        if (status)
        setInputStatusValue(status)
    }

    const onChangeStatusValue = (e: React.ChangeEvent<HTMLInputElement>) => {
            setInputStatusValue(e.currentTarget.value)
    }

    const onBlurEditStatus = () => {
        setToggleChangeStatus(false)
        if (inputStatusValue) {
            dispatch(setStatusThunk(inputStatusValue))
        }
    }

    const onEnterClickToChangeStatus = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (inputStatusValue) {
                dispatch(setStatusThunk(inputStatusValue))
            }
            setToggleChangeStatus(false)
        }
    }

    return (
        <div>
            {
                !toggleChangeStatus &&
                status
                    ? <div className={s.status} onClick={onClickChangeToEditStatus}>Status: {status}</div>
                    : <div
                        className={s.noneStatus}
                        onClick={onClickChangeToEditStatus}>
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

        </div>

    )
}