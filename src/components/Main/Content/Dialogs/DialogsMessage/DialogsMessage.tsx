import React from "react";
import s from './DialogsMessage.module.css'

type DialogsMessageType = {
    time: string
    message: string
}

function DialogsMessage(props: DialogsMessageType) {
    return (
        <div className={s.messages}>
            <div className={s.messages__body}>
                <div className={s.messages__avatar}>
                    <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png" alt="avatar"/>
                </div>
                <div className={s.messages__content}>
                    <div className={s.messages__time}>
                        {props.time}
                    </div>
                    <div className={s.messages__message}>
                        {props.message}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DialogsMessage;