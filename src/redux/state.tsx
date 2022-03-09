import {v1} from "uuid";

type DialogsNameType = {
    id: string
    name: string
}
type DialogsMessageType = {
    id: string
    time: string
    message: string
}
type DialogsPageType = {
    dialogsName: DialogsNameType[]
    dialogsMessage: DialogsMessageType[]
}
type PostMessagesType = {
    id: string
    time: string
    postMessage: string
    counterLike: number
}
type ProfilePageType = {
    postMessages: PostMessagesType[]
}

export type AddNewMessageActionType = ReturnType<typeof addDialogMessageAC>
export type AddNewPostMessageActionType = ReturnType<typeof addPostMessageAC>


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
        switch (action.type) {
            case 'ADD-NEW-MESSAGE':
                let newMessage = {
                    id: v1(),
                    time: action.time,
                    message: action.message,
                }
                this._state.dialogPage.dialogsMessage.push(newMessage)
                this._render(this._state)
                break;
            case 'ADD-NEW-POST-MESSAGE':
                let newPostMessage = {
                    id: v1(),
                    time: action.time,
                    postMessage: action.message,
                    counterLike: 0,
                }
                this._state.profilePage.postMessages.push(newPostMessage)
                this._render(this._state)
                break;
            default:
                return this.getState()
        }
    },
    subscribe (observer: (state: RootStateType) => void) {
        this._render = observer
    },
}

export const addDialogMessageAC = (time: string, inputMessage: string)  => ({type: 'ADD-NEW-MESSAGE', time: time, message: inputMessage})
export const addPostMessageAC = (time: string, inputMessage: string)  => ({type: 'ADD-NEW-POST-MESSAGE', time: time, message: inputMessage})


// @ts-ignore
window.store = store