import React from "react";
import s from './Dialogs.module.css'
import DialogsName from "./DialogsName/DialogsName";
import DialogsMessage from "./DialogsMessage/DialogsMessage";

function Dialogs() {
    return (
        <div>
            <div className={s.headerNameDialogs}>
                <h2>Dialogs</h2>
            </div>
            <div className={s.headerForNameAndMessages}>
                <div>
                    Name:
                    <div className={s.usersDialogsNameAndMessage}>
                        <DialogsName name='Masha' id={1}/>
                        <DialogsName name='Pasha' id={2}/>
                        <DialogsName name='Vitya' id={3}/>
                        <DialogsName name='Dima' id={4}/>
                    </div>
                </div>
                <div>
                    Messages:
                    <div className={s.usersDialogsNameAndMessage}>
                        <DialogsMessage message='Hello' />
                        <DialogsMessage message='How' />
                        <DialogsMessage message='Are' />
                        <DialogsMessage message='You' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs