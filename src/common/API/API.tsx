import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': '859ba232-e2e7-4407-9bc0-cc36cc3aa20a'
    }
})

type ResponseType<D> = {
    resultCode: number
    messages: string[]
    data: D
}

export type profileAPISetProfileType = {
    aboutMe: string | null
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        facebook: string | undefined
        website: string | undefined
        vk: string | undefined
        twitter: string | undefined
        instagram: string | undefined
        youtube: string | undefined
        github: string | undefined
        mainLink: string | undefined
    }
    photos: {
        small: string | null
        large: string | null
    }

}
export type ItemUsersType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: null | string
        large: null | string
    }
    status: null | string
    followed: boolean
}
export type userAPISetUsersType<D> = {
    totalCount: number
    error: string | null
    items: D[]
}
type authAPISetAuthUserType = {
    id: number
    email: string
    login: string
}

export const selfProfile = {
    setStatusProfile(status: string) {
        return (
            instance.put<ResponseType<{}>>(`/profile/status`, {status})
                .then(response => response.data)
        )
    }
}
export const profileAPI = {
    setProfile(userId: string | undefined) {
        return (
            instance.get<profileAPISetProfileType>(`/profile/${userId}`)
                .then(response => response.data)
        )
    },
    getProfileStatusUser(id: number) {
        return (
            instance.get<string>(`/profile/status/${id}`)
                .then(response => response.data)
        )
    }
}
export const userAPI = {
    setUsers(usersCountOnPage: number = 6, page: number = 1) {
        return (
            instance.get<userAPISetUsersType<ItemUsersType>>(`/users?count=${usersCountOnPage}&page=${page}`)
                .then(response => response.data)
        )
    },
    setUserFollow(id: number) {
        return (
            instance.post<ResponseType<{}>>(`/follow/${id}`)
                .then(response => response.data)
        )
    },
    setUserUnFollow(id: number) {
        return (
            instance.delete<ResponseType<{}>>(`/follow/${id}`)
                .then(response => response.data)
        )
    }
}
export const authAPI = {
    setAuthUser() {
        return (
            instance.get<ResponseType<authAPISetAuthUserType>>(`/auth/me`)
                .then(response => response.data)
        )
    },
    setLogin(email: string, password: string, rememberMe: boolean) {
        return (
            instance.post<ResponseType<{userId: number}>>(`/auth/login`, {email, password, rememberMe})
                .then(response => response.data)
        )
    },
    setLogout() {
        return (
            instance.delete<ResponseType<{}>>(`/auth/login`)
                .then(response => response.data)
        )
    }
}