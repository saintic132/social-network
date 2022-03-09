import s from "../../Dialogs.module.css";
import React, {useState} from "react";
import {ActionsType} from "../../../../../../redux/state";
import {addDialogMessageAC} from "../../../../../../redux/dialog-reducer";

type InputNewMessageType = {
    dispatch: (action: ActionsType) => void
}

export function InputNewMessage(props: InputNewMessageType) {

    let [inputMessage, setInputMessage] = useState<string>('');
    let today = new Date()

    let time = today.getHours() + (today.getMinutes() < 10 ? ':0' : ':') + today.getMinutes()


    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputMessage(e.currentTarget.value)
    }

    const addNewPost = () => {
        if (inputMessage) {
            props.dispatch(addDialogMessageAC(time, inputMessage))
            setInputMessage('')
        }
    }

    const addNewMessageByKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (inputMessage && e.key === 'Enter') {
            props.dispatch(addDialogMessageAC(time, inputMessage))
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
}