import {connect} from "react-redux";
import {
    followAC,
    InitialUserStateType,
    setCurrentPageAC, setIsFetchingAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../../../redux/users-reducer";
import Users from "./Users";
import {ReduxStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import React, {useEffect} from "react";
import Preloader from "../../../../common/Preloader/Preloader";

let mapStateToProps = (state: ReduxStateType): InitialUserStateType => {
    return {
        users: state.usersPage.users,
        allUsers: state.usersPage.allUsers,
        usersCountOnPage: state.usersPage.usersCountOnPage,
        currentPageNumber: state.usersPage.currentPageNumber,
        isFetching: state.usersPage.isFetching
    }
}

type MapDispatchPropsType = {
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (page: number) => void
    setIsFetching: (fetching: boolean) => void
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (id: string) => {
            dispatch(followAC(id))
        },
        unfollow: (id: string) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setIsFetching: (fetching: boolean) => {
            dispatch(setIsFetchingAC(fetching))
        }
    }
}

export type UsersPropsType = {
    users: UsersType[]
    allUsers: number,
    usersCountOnPage: number,
    currentPageNumber: number
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (page: number) => void
    isFetching: boolean
    setIsFetching: (fetching: boolean) => void
}

function UsersRequest(props: UsersPropsType) {

    useEffect(() => {
        if (props.users.length === 0) {
            props.setIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${props.usersCountOnPage}`, {
                withCredentials: true,
                headers: {
                    'API-KEY': '73140186-6c0b-4d93-85fb-13e7b368f254'
                }})
                .then(response => {
                    props.setIsFetching(false)
                    props.setUsers(response.data.items)
                })
        }
    }, [])



    const setCurrentPage = (page: number) => {
        props.setIsFetching(true)
        props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${props.usersCountOnPage}&page=${page}`, {
            withCredentials: true,
            headers: {
                'API-KEY': '73140186-6c0b-4d93-85fb-13e7b368f254'
            }})
            .then(response => {
                props.setIsFetching(false)
                props.setUsers(response.data.items)
            })
    }

    if (props.isFetching) {
        return <Preloader/>
    }

    return <Users
        {...props}
        setCurrentPage={setCurrentPage}
    />
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersRequest)