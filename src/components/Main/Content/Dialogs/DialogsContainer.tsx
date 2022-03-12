import React from "react";
import {StateType} from "../../../../App";
import Dialogs from "./Dialogs";
import {addDialogMessageAC} from "../../../../redux/dialog-reducer";


function DialogsContainer(props: StateType) {

    let state = props.store.getState()
    let today = new Date()
    let time = today.getHours() + (today.getMinutes() < 10 ? ':0' : ':') + today.getMinutes()

    const addNewPost = (inputMessage: string) => {
            props.store.dispatch(addDialogMessageAC(time, inputMessage))
    }

    const addNewMessageByKeyPress = (inputMessage: string) => {
            props.store.dispatch(addDialogMessageAC(time, inputMessage))
    }

    return (
        <Dialogs
            dialogsName={state.dialogPage.dialogsName}
            dialogsMessage={state.dialogPage.dialogsMessage}
            addNewPost={addNewPost}
            addNewMessageByKeyPress={addNewMessageByKeyPress}
        />
    )
}

export default DialogsContainer