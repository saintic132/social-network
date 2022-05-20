import React, {memo, useState} from "react";
import s from "../Dialogs.module.css";
import {useDispatch} from "react-redux";
import {addDialogMessageAC} from "../../../../../redux/dialog-reducer";

export const InputNewMessage = memo(() => {

    const today = new Date()
    const time = today.getHours() + (today.getMinutes() < 10 ? ':0' : ':') + today.getMinutes()
    const [inputMessage, setInputMessage] = useState<string>('');
    const dispatch = useDispatch()

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputMessage(e.currentTarget.value)
    }

    const addNewPost = () => {
        if (inputMessage) {
            dispatch(addDialogMessageAC(time, inputMessage))
            setInputMessage('')
        }
    }

    const addNewMessageByKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (inputMessage && e.key === 'Enter') {
            dispatch(addDialogMessageAC(time, inputMessage))
            setInputMessage('')
        }
    }

    return (
        <div className={s.dialogs__post}>
            <input
                className={s.inputTextForMessage}
                value={inputMessage}
                onChange={changeInput}
                onKeyPress={addNewMessageByKeyPress}
                type="text"
                placeholder='Enter the text'
            />
            <button
                className={s.inputButtonAddNewMessage}
                onClick={addNewPost}
            >Add post
            </button>
        </div>
    )
})