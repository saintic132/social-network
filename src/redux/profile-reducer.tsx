import {v1} from "uuid";
import {ActionsType} from "./redux-store";

// Для лучшего отображения времени, время уменьшено на 2 минуты
let today = new Date()
let minTime = ((today.getMinutes() -2 ) < 0 ? '0' : (today.getMinutes() -2 ))
let time = today.getHours() + (minTime < 10 ? ':0' : ':') + today.getMinutes();

export type ProfileReducersActionType = AddNewPostMessageActionType | SetProfileActionType

type AddNewPostMessageActionType = ReturnType<typeof addPostMessageAC>
type SetProfileActionType = ReturnType<typeof setProfileAC>
export type PostMessagesType = {
    id: string
    time: string
    postMessage: string
    counterLike: number
}

type ProfileContactType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

type ProfilePhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    aboutMe: string | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    contacts: ProfileContactType
    photos: ProfilePhotosType
}

export type initialProfileStateType = {
    postMessages: PostMessagesType[]
    profile: null | ProfileType
}


let initialState: initialProfileStateType = {
    postMessages: [
        {
            id: v1(), time: time, postMessage: 'My first post message', counterLike: 0
        }
    ],
    profile: null
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
            return {
                ...state,
                postMessages: [...state.postMessages, newPostMessage]
            }
        case 'SET-NEW-PROFILE': {
            return {...state,
                profile: action.profile}
        }
        default:
            return state
    }
}

export const addPostMessageAC = (time: string, inputMessage: string)  => ({type: 'ADD-NEW-POST-MESSAGE', time: time, message: inputMessage} as const)
export const setProfileAC = (profile: ProfileType)  => ({type: 'SET-NEW-PROFILE', profile} as const)

export default profileReducer