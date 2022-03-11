import React from "react";
import s from './Dialogs.module.css'
import DialogsName from "./DialogsName/DialogsName";
import DialogsMessage from "./DialogsMessage/DialogsMessage";
import {StateType} from "../../../../App";
import {InputNewMessage} from "./DialogsMessage/InputNewMessage/InputNewMessage";


function Dialogs(props: StateType) {
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
                                            dialogsName={props.state.dialogPage.dialogsName}
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
                                dialogsMessage={props.state.dialogPage.dialogsMessage}
                            />


                        </div>
                    </div>
                </div>

                <InputNewMessage
                    dispatch={props.dispatch}
                />

            </div>
        </div>
    )
}

export default Dialogs