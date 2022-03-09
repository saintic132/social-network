import {v1} from "uuid";
import {ActionsType, ProfilePageType} from "./state";

export type AddNewPostMessageActionType = ReturnType<typeof addPostMessageAC>

const profileReducer = (state: ProfilePageType, action: ActionsType): ProfilePageType => {
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