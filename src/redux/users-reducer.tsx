import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {userAPI} from "../common/API/API";

export type UsersActionType =
    FollowACType
    | UnfollowACType
    | SetUsersACType
    | setCurrentPageACType
    | setIsFetchingACType
    | setDisableFollowButtonACType
export type FollowACType = ReturnType<typeof followAC>
export type UnfollowACType = ReturnType<typeof unfollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type setIsFetchingACType = ReturnType<typeof setIsFetchingAC>
export type setDisableFollowButtonACType = ReturnType<typeof setDisableFollowButtonAC>


type PhotosType = {
    small: string
    large: string
}
export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: PhotosType
    status: string | null
    followed: boolean
}
export type InitialUserStateType = {
    users: UsersType[],
    allUsers: number,
    usersCountOnPage: number,
    currentPageNumber: number
    isFetching: boolean
    disableFollowButton: number[]
}

let initialState: InitialUserStateType = {
    users: [],
    allUsers: 60,
    usersCountOnPage: 6,
    currentPageNumber: 1,
    isFetching: false,
    disableFollowButton: []
};

const usersReducer = (state: InitialUserStateType = initialState, action: ActionsType): InitialUserStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users:
                    state.users.map(el => {
                        if (el.id === action.userId) {
                            return {...el, followed: true}
                        }
                        return el
                    })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users:
                    state.users.map(el => {
                        if (el.id === action.userId) {
                            return {...el, followed: false}
                        }
                        return el
                    })
            }
        case 'SET-USERS':
            return {
                ...state,
                users: [...action.setUsers]
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPageNumber: action.currentPage
            }
        case 'SET-FETCHING-PAGE':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'SET-DISABLE-FOLLOWING-BUTTON':
            return {
                ...state,
                disableFollowButton: action.status
                    ? [...state.disableFollowButton, action.id]
                    : state.disableFollowButton.filter(userId => userId !== action.id)
            }
        default:
            return state
    }
}

export const followAC = (id: number) => ({type: 'FOLLOW', userId: id} as const)
export const unfollowAC = (id: number) => ({type: 'UNFOLLOW', userId: id} as const)
export const setUsersAC = (users: UsersType[]) => ({type: 'SET-USERS', setUsers: users} as const)
export const setCurrentPageAC = (page: number) => ({type: 'SET-CURRENT-PAGE', currentPage: page} as const)
export const setIsFetchingAC = (fetching: boolean) => ({type: 'SET-FETCHING-PAGE', isFetching: fetching} as const)
export const setDisableFollowButtonAC = (status: boolean, id: number) => ({
    type: 'SET-DISABLE-FOLLOWING-BUTTON',
    status,
    id
} as const)


export const setUsersThunk = (page: number) => {
    return (dispatch: Dispatch) => {
        if (initialState.users.length === 0) {
            dispatch(setIsFetchingAC(true))
            userAPI.setUsers(initialState.usersCountOnPage, page)
                .then(data => {
                    dispatch(setIsFetchingAC(false))
                    dispatch(setUsersAC(data.items))
                    dispatch(setCurrentPageAC(page))
                })
        }
    }
}

export const followUserThunk = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setDisableFollowButtonAC(true, id))
        userAPI.setUserFollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followAC(id))
                }
                dispatch(setDisableFollowButtonAC(false, id))
            })
    }
}
export const unFollowUserThunk = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setDisableFollowButtonAC(true, id))
        userAPI.setUserUnFollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowAC(id))
                }
                dispatch(setDisableFollowButtonAC(false, id))
            })
    }
}

export default usersReducer