import {v1} from "uuid";
import {ActionsType} from "./redux-store";

// Для лучшего отображения времени, время уменьшено на 2 минуты
let today = new Date()
let minTime = ((today.getMinutes() - 2) < 0 ? '0' : (today.getMinutes() - 2))
let time = today.getHours() + (minTime < 10 ? ':0' : ':') + today.getMinutes();

type DialogsNameType = {
    id: string
    name: string
}
type DialogsMessageType = {
    id: string
    time: string
    message: string
}
export type initialDialogStateType = {
    dialogsName: DialogsNameType[]
    dialogsMessage: DialogsMessageType[]
}

export type AddNewMessageActionType = ReturnType<typeof addDialogMessageAC>

let initialState: initialDialogStateType = {
        dialogsName: [
            {id: v1(), name: 'Masha'},
            {id: v1(), name: 'Pasha'},
            {id: v1(), name: 'Vitya'},
            {id: v1(), name: 'Dima'},
        ],
        dialogsMessage: [
            {id: v1(), time: time, message: 'Hello'},
            {id: v1(), time: time, message: 'How'},
            {id: v1(), time: time, message: 'Are'},
            {id: v1(), time: time, message: 'You'},
            {id: v1(), time: time, message: 'Today'},
            {id: v1(), time: time, message: '?'},
        ],
}


const dialogReducer = (state: initialDialogStateType = initialState, action: ActionsType): initialDialogStateType => {
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

export const addDialogMessageAC = (time: string, inputMessage: string)  => ({
    type: 'ADD-NEW-MESSAGE',
    time: time,
    message: inputMessage
} as const)

export default dialogReducer