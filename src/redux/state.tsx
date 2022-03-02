type dialogPageType = {
    dialogsName: Array<dialogsNameType>
    dialogsMessage: Array<dialogsMessageType>
}
type dialogsNameType = {
    id: number
    name: string
}
type dialogsMessageType = {
    id: number
    message: string
}

export type RootStateType = {
    dialogPage: dialogPageType
}

const state: RootStateType = {
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
}

export default state;