import React from 'react';
import {LoginForm} from "./LoginForm/LoginForm";
import {useSelector} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";

export function LoginPage() {

    let isAuth = useSelector<ReduxStateType, boolean>(state => state.auth.isAuth)

    if (isAuth) return <Navigate to={'/'} />

    return (
        <div>
            <h1>Login Here</h1>
            <LoginForm />
        </div>
    );
}