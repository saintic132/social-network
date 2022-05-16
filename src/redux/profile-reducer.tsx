import {v1} from "uuid";
import {ActionsType} from "./redux-store";
import {profileAPI, selfProfile} from "../common/API/API";
import {Dispatch} from "redux";

// Для лучшего отображения времени, время уменьшено на 2 минуты
let today = new Date()
let minTime = ((today.getMinutes() - 2) < 0 ? '0' : (today.getMinutes() - 2))
let time = today.getHours() + (minTime < 10 ? ':0' : ':') + today.getMinutes();

export type PostMessagesType = {
    id: string
    time: string
    postMessage: string
    counterLike: number
}

type ProfileContactType = {
    facebook: string | undefined
    website: string | undefined
    vk: string | undefined
    twitter: string | undefined
    instagram: string | undefined
    youtube: string | undefined
    github: string | undefined
    mainLink: string | undefined
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
    status: string | null
    selfStatus: string | null
}


let initialState: initialProfileStateType = {
    postMessages: [
        {
            id: v1(), time: time, postMessage: 'My first post message', counterLike: 0
        }
    ],
    profile: null,
    status: null,
    selfStatus: null
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
            return {
                ...state,
                profile: action.profile
            }
        }
        case "SET-NEW-STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        case "SET-NEW-SELF-STATUS": {
            return {
                ...state,
                selfStatus: action.status
            }
        }
        default:
            return state
    }
}

export const addPostMessageAC = (time: string, inputMessage: string) => ({
    type: 'ADD-NEW-POST-MESSAGE',
    time: time,
    message: inputMessage
} as const)
export const setProfileAC = (profile: ProfileType) => ({type: 'SET-NEW-PROFILE', profile} as const)
export const setStatusToProfileAC = (status: string) => ({type: 'SET-NEW-STATUS', status} as const)
export const setSelfStatusToProfileAC = (status: string) => ({type: 'SET-NEW-SELF-STATUS', status} as const)

export type ProfileReducersActionType =
    AddNewPostMessageActionType
    | SetProfileActionType
    | SetStatusToProfileActionType
    | SetSelfStatusToProfileActionType

type AddNewPostMessageActionType = ReturnType<typeof addPostMessageAC>
type SetProfileActionType = ReturnType<typeof setProfileAC>
type SetStatusToProfileActionType = ReturnType<typeof setStatusToProfileAC>
type SetSelfStatusToProfileActionType = ReturnType<typeof setSelfStatusToProfileAC>


export const setProfileThunk = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.setProfile(userId)
            .then(data => {
                dispatch(setProfileAC(data))
            })
    }
}

export const setSelfStatusThunk = (status: string) => {
    return (dispatch: Dispatch) => {
        selfProfile.setStatusProfile(status)
            .then(data => {
                if (data.resultCode === 0)
                    dispatch(setSelfStatusToProfileAC(status))
            })
    }
}

export const getProfileStatusUserThunk = (id: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfileStatusUser(id)
            .then(data => {
                dispatch(setStatusToProfileAC(data))
            })
    }
}

export default profileReducer