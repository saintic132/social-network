import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../../../redux/users-reducer";
import Users from "./Users";
import {ReduxStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    users: UsersType[]
}

let mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

type MapDispatchPropsType = {
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: UsersType[]) => void
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer