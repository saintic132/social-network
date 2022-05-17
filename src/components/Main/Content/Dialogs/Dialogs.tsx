import React, {memo} from "react";
import s from './Dialogs.module.css'
import {InputNewMessage} from "./InputNewMessage/InputNewMessage";
import {initialDialogStateType} from "../../../../redux/dialog-reducer";
import {useSelector} from "react-redux";
import {ReduxStateType} from "../../../../redux/redux-store";
import {Redirect} from "../../../../common/redirect/Redirect";
import {DialogsMessage} from "./DialogsMessage/DialogsMessage";
import {DialogsName} from "./DialogsName/DialogsName";


const Dialogs = memo(() => {

    const dialogsState = useSelector<ReduxStateType, initialDialogStateType>(state => state.dialogPage)

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
                                dialogsName={dialogsState.dialogsName}
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
                                dialogsMessage={dialogsState.dialogsMessage}
                            />

                        </div>
                    </div>
                </div>

                <InputNewMessage
                />

            </div>
        </div>
    )
})

export default Redirect(Dialogs)