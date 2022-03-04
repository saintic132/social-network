import React from "react";
import s from './DialogsMessage.module.css'

type DialogsMessageType = {
    id: number
    message: string
}

function DialogsMessage(props: DialogsMessageType) {
    return (
            <div className={s.messages}>
                <div className={s.messages__message}>
                    <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png" alt=""/>
                    {props.message}
                </div>
            </div>

    )
}

export default DialogsMessage;