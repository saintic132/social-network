import React, {memo} from "react";
import s from './DialogsMessage.module.css'
import {DialogsMessageType} from "../../../../../redux/dialog-reducer";

type MessageType = {
    dialogsMessage: DialogsMessageType[]
}

export const DialogsMessage = memo((props: MessageType) => {
    return (
        <div className={s.messages}>

            {

                props.dialogsMessage.map(el => {
                    return (
                        <div
                            key={el.id}
                            className={s.messages__body}>
                            <div className={s.messages__avatar}>
                                <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
                                     alt="avatar"/>
                            </div>
                            <div className={s.messages__content}>
                                <div className={s.messages__time}>
                                    {el.time}
                                </div>
                                <div className={s.messages__message}>
                                    {el.message}
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>

    )
})

