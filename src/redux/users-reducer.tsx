import {ActionsType} from "./redux-store";

export type UsersActionType = FollowACType | UnfollowACType | SetUsersACType | setCurrentPageACType | setIsFetchingACType
export type FollowACType = ReturnType<typeof followAC>
export type UnfollowACType = ReturnType<typeof unfollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type setIsFetchingACType = ReturnType<typeof setIsFetchingAC>


type PhotosType = {
    small: string
    large: string
}
export type UsersType = {
    name: string
    id: string
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
}

let initialState: InitialUserStateType = {
    users: [],
    allUsers: 60,
    usersCountOnPage: 6,
    currentPageNumber: 1,
    isFetching: false
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
        default:
            return state
    }
}

export const followAC = (id: string) => ({type: 'FOLLOW', userId: id} as const)
export const unfollowAC = (id: string) => ({type: 'UNFOLLOW', userId: id} as const)
export const setUsersAC = (users: UsersType[]) => ({type: 'SET-USERS', setUsers: users} as const)
export const setCurrentPageAC = (page: number) => ({type: 'SET-CURRENT-PAGE', currentPage: page} as const)
export const setIsFetchingAC = (fetching: boolean) => ({type: 'SET-FETCHING-PAGE', isFetching: fetching} as const)

export default usersReducer