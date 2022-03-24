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

export default connect(mapStateToProps, mapDispatchToProps)(Users)