type DialogsNameType = {
    id: number
    name: string
}
type DialogsMessageType = {
    id: number
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
    addNewMessage: (message: string) => void
    // subscribe: (observer: () => void) => void
    getState: () => RootStateType
}

export const store: StoreType = {
    _state:  {
        dialogPage: {
            dialogsName: [
                {id: 1, name: 'Masha'},
                {id: 2, name: 'Pasha'},
                {id: 3, name: 'Vitya'},
                {id: 4, name: 'Dima'},
            ],
            dialogsMessage: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How'},
                {id: 3, message: 'Are'},
                {id: 4, message: 'You'},
                {id: 5, message: 'Today'},
                {id: 6, message: '?'},
            ],
        }
    },
    getState() {
        return this._state
    },
    // _render () {
    // },
    addNewMessage (message: string) {
        let newMessage = {
            id: 7,
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