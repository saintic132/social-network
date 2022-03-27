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
import React, {useEffect} from "react";
import Preloader from "../../../../common/Preloader/Preloader";
import {userAPI} from "../../../../common/API/API";

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
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (page: number) => void
    setIsFetching: (fetching: boolean) => void
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        unfollow: (id: number) => {
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
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (page: number) => void
    isFetching: boolean
    setIsFetching: (fetching: boolean) => void
}

function UsersRequest(props: UsersPropsType) {

    useEffect(() => {
        if (props.users.length === 0) {
            props.setIsFetching(true)
            userAPI.setUsers(props.usersCountOnPage)
                .then(data => {
                    props.setIsFetching(false)
                    props.setUsers(data.items)
                })
        }
    }, [])


    const setCurrentPage = (page: number) => {
        props.setIsFetching(true)
        props.setCurrentPage(page)

        userAPI.setUsers(props.usersCountOnPage, page)
            .then(data => {
                props.setIsFetching(false)
                props.setUsers(data.items)
            })
    }
    const setUserFollow = (id: number) => {
        userAPI.setUserFollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    props.follow(id)
                }
            })
    }

    const setUserUnFollow = (id: number) => {
       userAPI.setUserUnFollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    props.unfollow(id)
                }
            })
    }

    if (props.isFetching) {
        return <Preloader />
    }

    return <Users
        {...props}
        setCurrentPage={setCurrentPage}
        setUserFollow={setUserFollow}
        setUserUnFollow={setUserUnFollow}
    />
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersRequest)