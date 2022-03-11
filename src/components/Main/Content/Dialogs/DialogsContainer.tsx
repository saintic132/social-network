import React from "react";
import {StateType} from "../../../../App";
import Dialogs from "./Dialogs";
import {addDialogMessageAC} from "../../../../redux/dialog-reducer";


function DialogsContainer(props: StateType) {

    let today = new Date()
    let time = today.getHours() + (today.getMinutes() < 10 ? ':0' : ':') + today.getMinutes()

    const addNewPost = (inputMessage: string) => {
            props.dispatch(addDialogMessageAC(time, inputMessage))
    }

    const addNewMessageByKeyPress = (e: string, inputMessage: string) => {
        if (inputMessage && e === 'Enter') {
            props.dispatch(addDialogMessageAC(time, inputMessage))
        }
    }

    return (
        <Dialogs
            dialogsName={props.state.dialogPage.dialogsName}
            dialogsMessage={props.state.dialogPage.dialogsMessage}
            addNewPost={addNewPost}
            addNewMessageByKeyPress={addNewMessageByKeyPress}
        />
    )
}

export default DialogsContainer