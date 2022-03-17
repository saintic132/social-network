import Dialogs from "./Dialogs";
import {addDialogMessageAC, DialogsMessageType, DialogsNameType} from "../../../../redux/dialog-reducer";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";


let today = new Date()
let time = today.getHours() + (today.getMinutes() < 10 ? ':0' : ':') + today.getMinutes()

type MapStatePropsType = {
    dialogsName: DialogsNameType[]
    dialogsMessage: DialogsMessageType[]
}

let mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        dialogsName: state.dialogPage.dialogsName,
        dialogsMessage: state.dialogPage.dialogsMessage
    }
}

type MapDispatchPropsType = {
    addNewPost: (inputMessage: string) => void
    addNewMessageByKeyPress: (inputMessage: string) => void
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addNewPost: (inputMessage: string) => {
            dispatch(addDialogMessageAC(time, inputMessage))
        },
        addNewMessageByKeyPress: (inputMessage: string) => {
            addDialogMessageAC(time, inputMessage)
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer