import {v1} from "uuid";
import {ActionsType} from "./redux-store";

// Для лучшего отображения времени, время уменьшено на 2 минуты
let today = new Date()
let minTime = ((today.getMinutes() -2 ) < 0 ? '0' : (today.getMinutes() -2 ))
let time = today.getHours() + (minTime < 10 ? ':0' : ':') + today.getMinutes();

export type AddNewPostMessageActionType = ReturnType<typeof addPostMessageAC>
export type PostMessagesType = {
    id: string
    time: string
    postMessage: string
    counterLike: number
}
export type initialProfileStateType = {
    postMessages: PostMessagesType[]
}


let initialState: initialProfileStateType = {
    postMessages: [
        {id: v1(), time: time, postMessage: 'My first post message', counterLike: 0}
    ]
}

const profileReducer = (state: initialProfileStateType = initialState, action: ActionsType): initialProfileStateType => {
    switch (action.type) {
        case 'ADD-NEW-POST-MESSAGE':
            let newPostMessage = {
                id: v1(),
                time: action.time,
                postMessage: action.message,
                counterLike: 0,
            }
            state.postMessages.push(newPostMessage)
            return state
        default:
            return state
    }
}

export const addPostMessageAC = (time: string, inputMessage: string)  => ({type: 'ADD-NEW-POST-MESSAGE', time: time, message: inputMessage} as const)

export default profileReducer