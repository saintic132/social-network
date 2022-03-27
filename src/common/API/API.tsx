import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': '73140186-6c0b-4d93-85fb-13e7b368f254'
    }
})


export const profileAPI = {
    setProfile(userId: string | undefined) {
        return (
            instance.get(`/profile/${userId}`)
                .then(response => response.data)
        )
    }
}
export const userAPI = {
    setUsers(usersCountOnPage: number = 6, page: number = 1) {
        return (
            instance.get(`/users?count=${usersCountOnPage}&page=${page}`)
                .then(response => response.data)
        )
    },
    setUserFollow(id: number) {
        return (
            instance.post(`/follow/${id}`)
                .then(response => response.data)
        )
    },
    setUserUnFollow(id: number) {
        return (
            instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
                .then(response => response.data)
        )
    }
}
export const authAPI = {
    setAuthUser() {
        return (
            instance.get(`/auth/me`)
                .then(response => response.data)
        )
    }
}