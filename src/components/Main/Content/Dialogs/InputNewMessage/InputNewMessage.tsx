import React, {useState} from "react";
import s from "../Dialogs.module.css";

type InputNewMessageType = {
    addNewPost: (inputMessage: string) => void
    addNewMessageByKeyPress: (inputMessage: string) => void
}

export function InputNewMessage(props: InputNewMessageType) {

    let [inputMessage, setInputMessage] = useState<string>('');

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputMessage(e.currentTarget.value)
    }

    const addNewPost = () => {
        if (inputMessage) {
            props.addNewPost(inputMessage)
            setInputMessage('')
        }
    }

    const addNewMessageByKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (inputMessage && e.key === 'Enter') {
            props.addNewMessageByKeyPress(inputMessage)
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