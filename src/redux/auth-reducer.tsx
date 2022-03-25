import {ActionsType} from "./redux-store";

export type AuthReducerType = setAuthUserACType

type setAuthUserACType = ReturnType<typeof setAuthUserAC>

type InitialAuthStateType = {
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

export const setAuthUserAC = (id: number, login: string, email: string) => ({type: 'SET-AUTH-USER', data: {id, login, email}} as const)

export default authReducer