import {ActionsType} from "./redux-store";

export type UsersActionType = FollowACType | UnfollowACType | SetUsersAC
export type FollowACType = ReturnType<typeof followAC>
export type UnfollowACType = ReturnType<typeof unfollowAC>
export type SetUsersAC = ReturnType<typeof setUsersAC>


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
    users: UsersType[]
}

let initialState: InitialUserStateType = {
    users: [
        // {
        //     id: v1(),
        //     avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Image.png',
        //     followed: true,
        //     fullName: 'Ivansk',
        //     status: 'Hello world',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: v1(),
        //     avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png',
        //     followed: false,
        //     fullName: 'Mixa',
        //     status: 'Mi gracia',
        //     location: {
        //         city: 'Kiev', country: 'Ukraine'
        //     }
        // },
        // {
        //     id: v1(),
        //     avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar.png',
        //     followed: false,
        //     fullName: 'Lexa',
        //     status: 'Lololo',
        //     location: {
        //         city: 'Moscow', country: 'Russia'
        //     }
        // }
    ]
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
        default:
            return state
    }
}

export const followAC = (id: string) => ({type: 'FOLLOW', userId: id} as const)
export const unfollowAC = (id: string) => ({type: 'UNFOLLOW', userId: id} as const)
export const setUsersAC = (users: UsersType[]) => ({type: 'SET-USERS', setUsers: users} as const)

export default usersReducer