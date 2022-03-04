import React, {useState} from "react";
import s from './Dialogs.module.css'
import DialogsName from "./DialogsName/DialogsName";
import DialogsMessage from "./DialogsMessage/DialogsMessage";
import {StateType} from "../../../../App";


function Dialogs(props: StateType) {

    let [inputMessage, setInputMessage] = useState<string>('');

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputMessage(e.currentTarget.value)
    }

    const addNewPost = () => {
        if (inputMessage) {
            props.addNewMessage(inputMessage)
            setInputMessage('')
        }
    }

    const addNewPostByKeyPress = (e:  React.KeyboardEvent<HTMLInputElement>) => {
        if (inputMessage && e.key === 'Enter') {
            props.addNewMessage(inputMessage)
            setInputMessage('')
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__body}>
                <div className={s.dialogs__title}>
                    <div className={s.dialogs__text}>
                        <h2>Dialogs</h2>
                    </div>
                </div>
                <div className={s.dialogs__columns}>
                    <div className={s.dialogs__names_columns}>
                        <div className={s.dialogs__names}>
                            <div className={s.dialogs__name_text}>
                                Name:
                            </div>
                        </div>
                        <div className={s.dialogs__propsname}>

                            {
                                props.state.dialogPage.dialogsName.map(el => {
                                    return (
                                        <DialogsName
                                            key={el.id}
                                            id={el.id}
                                            name={el.name}
                                        />
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className={s.dialogs__messages_columns}>
                        <div className={s.dialogs__messages}>
                            <div className={s.dialogs__messages_text}>
                                Messages:
                            </div>
                        </div>
                        <div className={s.dialogs__propsmessages}>

                            {
                                props.state.dialogPage.dialogsMessage.map(el => {
                                    return (
                                        <DialogsMessage
                                            key={el.id}
                                            id={el.id}
                                            message={el.message}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={s.dialogs__post}>
                        <input
                        className={s.inputTextForMessage}
                        value={inputMessage}
                        onChange={changeInput}
                        onKeyPress={addNewPostByKeyPress}
                        type="text"
                        placeholder='Enter the text'
                    />
                        <button
                            className={s.inputButtonAddNewMessage}
                            onClick={addNewPost}
                        >Add post
                        </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs