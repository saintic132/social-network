import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI, profileAPI} from "../common/API/API";
import {setSelfStatusToProfileAC} from "./profile-reducer";

export type AuthReducerType = setAuthUserACType

type setAuthUserACType = ReturnType<typeof setAuthUserAC>

export type InitialAuthStateType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
}

let initialState: InitialAuthStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state: InitialAuthStateType = initialState, action: ActionsType): InitialAuthStateType => {
    switch (action.type) {
        case 'SET-AUTH-USER': {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const setAuthUserAC = (id: number, login: string, email: string) => ({
    type: 'SET-AUTH-USER',
    data: {id, login, email}
} as const)

export const authThunk = () => {
    return (dispatch: Dispatch) => {
        authAPI.setAuthUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserAC(id, login, email))
                    profileAPI.getProfileStatusUser(id)
                        .then(data => {
                            dispatch(setSelfStatusToProfileAC(data))
                        })
                }
            })
    }
}


export default authReducer