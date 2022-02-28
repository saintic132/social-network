import React from "react";
import s from './Dialogs.module.css'
import DialogsName from "./DialogsName/DialogsName";
import DialogsMessage from "./DialogsMessage/DialogsMessage";

function Dialogs() {

    const dialogsName = [
        {id:1, name: 'Masha'},
        {id:2, name: 'Pasha'},
        {id:3, name: 'Vitya'},
        {id:4, name: 'Dima'},
    ]

    const dialogsMessage = [
        {message: 'Hello'},
        {message: 'How'},
        {message: 'Are'},
        {message: 'You'},
        {message: 'Today'},
        {message: '?'},
    ]


    return (
        <div>
            <div className={s.headerNameDialogs}>
                <h2>Dialogs</h2>
            </div>
            <div className={s.headerForNameAndMessages}>
                <div>
                    Name:
                    <div className={s.usersDialogsNameAndMessage}>

                        {
                            dialogsName.map(el => {
                                return (
                                    <DialogsName
                                        name={el.name}
                                        id={el.id}/>
                                )
                            })
                        }

                    </div>
                </div>
                <div>
                    Messages:
                    <div className={s.usersDialogsNameAndMessage}>

                        {
                            dialogsMessage.map(el => {
                                return (
                                    <DialogsMessage message={el.message} />
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs