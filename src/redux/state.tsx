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
export type RootStateType = {
    dialogPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType,
    // _render: (_state: RootStateType) => void
    addNewMessage: (message: string, time: string) => void
    // subscribe: (observer: () => void) => void
    getState: () => RootStateType
}

// Для лучшего отображения времени, время уменьшено на 2 минуты
let today = new Date()
let time = today.getHours() + ':' + (today.getMinutes() - 2);

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
        }
    },
    getState() {
        return this._state
    },
    // _render () {
    // },
    addNewMessage(message: string, time: string) {
        let newMessage = {
            id: v1(),
            time: time,
            message: message
        }
        this._state.dialogPage.dialogsMessage.push(newMessage)
        // this._render(this._state)
    },
    // subscribe (observer: () => void) {
    //     this._render = observer
    // },
}

// @ts-ignore
window.store = store