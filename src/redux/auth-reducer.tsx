import {Dispatch} from "redux";
import {authAPI, profileAPI} from "../common/API/API";
import {setSelfStatusToProfileAC} from "./profile-reducer";

export type AuthReducerType = setAuthUserACType | loginUserACType

type setAuthUserACType = ReturnType<typeof setAuthUserAC>
type loginUserACType = ReturnType<typeof loginUserAC>

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

const authReducer = (state: InitialAuthStateType = initialState, action: AuthReducerType): InitialAuthStateType => {
    switch (action.type) {
        case 'SET-AUTH-USER': {
            return {
                ...state,
                ...action.data,
            }
        }
        case "SET-LOGIN-USER": {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }
        default:
            return state
    }
}

export const setAuthUserAC = (id: number | null, login: string | null, email: string | null, isAuth: boolean = false) => ({
    type: 'SET-AUTH-USER',
    data: {id, login, email, isAuth}
} as const)

export const loginUserAC = (isAuth: boolean) => ({
    type: 'SET-LOGIN-USER',
    isAuth
} as const)

export const authThunk = () => {
    return (dispatch: Dispatch) => {
        authAPI.setAuthUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserAC(id, login, email, true))
                    profileAPI.getProfileStatusUser(id)
                        .then(data => {
                            dispatch(setSelfStatusToProfileAC(data))
                        })
                }
            })
    }
}

export const loginThunk = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch) => {
        authAPI.setLogin(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(loginUserAC(true))
                }
            })
    }
}

export const logoutThunk = () => {
    return (dispatch: Dispatch) => {
        authAPI.setLogout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserAC(null, null, null, false))
                }
            })
    }
}


export default authReducer