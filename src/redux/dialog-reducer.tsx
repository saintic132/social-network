import {v1} from "uuid";
import {ActionsType, DialogsPageType} from "./state";

export type AddNewMessageActionType = ReturnType<typeof addDialogMessageAC>

const dialogReducer = (state: DialogsPageType, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case 'ADD-NEW-MESSAGE':
            let newMessage = {
                id: v1(),
                time: action.time,
                message: action.message,
            }
            state.dialogsMessage.push(newMessage)
            return state
        default:
            return state
    }
}

export const addDialogMessageAC = (time: string, inputMessage: string)  => ({type: 'ADD-NEW-MESSAGE', time: time, message: inputMessage} as const)

export default dialogReducer