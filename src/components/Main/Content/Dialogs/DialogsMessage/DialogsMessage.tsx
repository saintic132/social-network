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
                    {props.message}
                </div>
            </div>

    )
}

export default DialogsMessage;