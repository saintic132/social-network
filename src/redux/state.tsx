import {v1} from "uuid";
import dialogReducer, {AddNewMessageActionType} from "./dialog-reducer";
import profileReducer, {AddNewPostMessageActionType} from "./profile-reducer";

type DialogsNameType = {
    id: string
    name: string
}
type DialogsMessageType = {
    id: string
    time: string
    message: string
}
export type DialogsPageType = {
    dialogsName: DialogsNameType[]
    dialogsMessage: DialogsMessageType[]
}
type PostMessagesType = {
    id: string
    time: string
    postMessage: string
    counterLike: number
}
export type ProfilePageType = {
    postMessages: PostMessagesType[]
}

export type ActionsType = AddNewMessageActionType | AddNewPostMessageActionType

export type RootStateType = {
    dialogPage: DialogsPageType
    profilePage: ProfilePageType
}


export type StoreType = {
    _state: RootStateType,
    getState: () => RootStateType
    _render: (state: RootStateType) => void
    dispatch: (action: ActionsType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
}

// Для лучшего отображения времени, время уменьшено на 2 минуты
let today = new Date()
let minTime = ((today.getMinutes() -2 ) < 0 ? '0' : (today.getMinutes() -2 ))
let time = today.getHours() + (minTime < 10 ? ':0' : ':') + today.getMinutes();

export const store: StoreType = {
    _state: {
        dialogPage: {
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
        },
        profilePage: {
            postMessages: [
                {id: v1(), time: time, postMessage: 'My first post message', counterLike: 0}
            ]
        }
    },
    getState() {
        return this._state
    },
    _render(_state: RootStateType) {
    },
    dispatch(action) {
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._render(this._state)
    },
    subscribe (observer: (state: RootStateType) => void) {
        this._render = observer
    },
}


// @ts-ignore
window.store = store