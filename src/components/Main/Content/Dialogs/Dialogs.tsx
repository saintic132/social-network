import React from "react";
import s from './Dialogs.module.css'
import DialogsName from "./DialogsName/DialogsName";
import DialogsMessage from "./DialogsMessage/DialogsMessage";
import {InputNewMessage} from "./InputNewMessage/InputNewMessage";
import {DialogsMessageType, DialogsNameType} from "../../../../redux/dialog-reducer";

type DialogsType = {
    dialogsName: DialogsNameType[]
    dialogsMessage: DialogsMessageType[]
    addNewPost: (inputMessage: string) => void
    addNewMessageByKeyPress: (inputMessage: string) => void
}

function Dialogs(props: DialogsType) {
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

                            <DialogsName
                                dialogsName={props.dialogsName}
                            />

                        </div>
                    </div>
                    <div className={s.dialogs__messages_columns}>
                        <div className={s.dialogs__messages}>
                            <div className={s.dialogs__messages_text}>
                                Messages:
                            </div>
                        </div>
                        <div className={s.dialogs__propsmessages}>

                            <DialogsMessage
                                dialogsMessage={props.dialogsMessage}
                            />

                        </div>
                    </div>
                </div>

                <InputNewMessage
                    addNewPost={props.addNewPost}
                    addNewMessageByKeyPress={props.addNewMessageByKeyPress}
                />

            </div>
        </div>
    )
}

export default Dialogs