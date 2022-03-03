import React from "react";
import s from './DialogsMessage.module.css'

type DialogsMessageType = {
    id: number
    message: string
}

function DialogsMessage(props: DialogsMessageType) {
    return (
            <div className={s.messages}>
                {props.message}
            </div>

    )
}

export default DialogsMessage;