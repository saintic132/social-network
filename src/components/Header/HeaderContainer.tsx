import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUserAC} from "../../redux/auth-reducer";
import {Dispatch} from "redux";
import {ReduxStateType} from "../../redux/redux-store";
import axios from "axios";

let mapStateToProps = (state: ReduxStateType) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

type mapDispatchPropsType = {
    setAuthUser: (id: number, login: string, email: string) => void
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        setAuthUser: (id: number, login: string, email: string) => {
            dispatch(setAuthUserAC(id, login, email))
        }
    }
}

export type HeaderPropsType = {
    login: null | string
    isAuth: boolean
    setAuthUser: (id: number, login: string, email: string) => void
}

function HeaderRequest(props: HeaderPropsType) {

    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
    })
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                props.setAuthUser(id, login, email)
            }
        })

    return <Header
        {...props}
    />
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderRequest)