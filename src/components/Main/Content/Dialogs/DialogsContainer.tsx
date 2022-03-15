import Dialogs from "./Dialogs";
import {addDialogMessageAC} from "../../../../redux/dialog-reducer";
import {connect} from "react-redux";


   let today = new Date()
    let time = today.getHours() + (today.getMinutes() < 10 ? ':0' : ':') + today.getMinutes()

    let mapStateToProps = (state: any) => {
        return {
            dialogsName: state.dialogPage.dialogsName,
            dialogsMessage: state.dialogPage.dialogsMessage
        }
    }

    let mapDispatchToProps = (dispatch: any) => {
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