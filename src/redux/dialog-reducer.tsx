import {v1} from "uuid";
import {ActionsType} from "./redux-store";

// Для лучшего отображения времени, время уменьшено на 2 минуты
let today = new Date()
let minTime = (today.getMinutes() < 10 ? ('0' + today.getMinutes()) : today.getMinutes())
let time = String(today.getHours()) + ':' + minTime;

export type DialogsNameType = {
    id: string
    name: string
}
export type DialogsMessageType = {
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
            let copyStateForAddPost = {...state, dialogsMessage: [...state.dialogsMessage]}
            copyStateForAddPost.dialogsMessage.push(newMessage)
            return copyStateForAddPost
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