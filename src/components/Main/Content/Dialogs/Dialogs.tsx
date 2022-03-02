import React from "react";
import s from './Dialogs.module.css'
import DialogsName from "./DialogsName/DialogsName";
import DialogsMessage from "./DialogsMessage/DialogsMessage";
import {StateType} from "../../../../App";


function Dialogs(props: StateType) {
    return (
        <div className={s.dialogs}>
            <div className={s.headerNameDialogs}>
                <h2>Dialogs</h2>
            </div>
            <div className={s.headerForNameAndMessages}>
                <div>
                    Name:
                    <div className={s.usersDialogsNameAndMessage}>

                        {
                            props.state.dialogPage.dialogsName.map(el => {
                                return (
                                    <DialogsName
                                        id={el.id}
                                        name={el.name}
                                    />
                                )
                            })
                        }

                    </div>
                </div>
                <div>
                    Messages:
                    <div className={s.usersDialogsNameAndMessage}>

                        {
                            props.state.dialogPage.dialogsMessage.map(el => {
                                return (
                                    <DialogsMessage
                                        id={el.id}
                                        message={el.message}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={s.inputBlockText}>
                <input
                    className={s.inputTextForMessage}
                    type="text"
                    placeholder='Enter the text'
                />
                <button
                    className={s.inputButtonAddNewMessage}
                >Add post
                </button>
            </div>
        </div>
    )
}

export default Dialogs