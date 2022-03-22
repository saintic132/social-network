import {ActionsType} from "./redux-store";

export type UsersActionType = FollowACType | UnfollowACType | SetUsersACType | setCurrentPageACType
export type FollowACType = ReturnType<typeof followAC>
export type UnfollowACType = ReturnType<typeof unfollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>


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
}

let initialState: InitialUserStateType = {
    users: [],
    allUsers: 60,
    usersCountOnPage: 6,
    currentPageNumber: 1
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
        default:
            return state
    }
}

export const followAC = (id: string) => ({type: 'FOLLOW', userId: id} as const)
export const unfollowAC = (id: string) => ({type: 'UNFOLLOW', userId: id} as const)
export const setUsersAC = (users: UsersType[]) => ({type: 'SET-USERS', setUsers: users} as const)
export const setCurrentPageAC = (page: number) => ({type: 'SET-CURRENT-PAGE', currentPage: page} as const)

export default usersReducer