import React from "react";
import Dialogs from "./Dialogs";
import {addDialogMessageAC} from "../../../../redux/dialog-reducer";
import StoreContext from "../../../../redux/store-context";


function DialogsContainer() {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState()
                    let today = new Date()
                    let time = today.getHours() + (today.getMinutes() < 10 ? ':0' : ':') + today.getMinutes()

                    const addNewPost = (inputMessage: string) => {
                        store.dispatch(addDialogMessageAC(time, inputMessage))
                    }

                    const addNewMessageByKeyPress = (inputMessage: string) => {
                        store.dispatch(addDialogMessageAC(time, inputMessage))
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
            }


        </StoreContext.Consumer>
    )
}

export default DialogsContainer