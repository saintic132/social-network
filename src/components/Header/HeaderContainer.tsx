import React, {useEffect} from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUserAC} from "../../redux/auth-reducer";
import {Dispatch} from "redux";
import {ReduxStateType} from "../../redux/redux-store";
import {authAPI} from "../../common/API/API";

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

    useEffect(() => {
        authAPI.setAuthUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    props.setAuthUser(id, login, email)
                }
            })
    },[])

    return <Header
        {...props}
    />
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderRequest)