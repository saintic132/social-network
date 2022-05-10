import React from 'react';
import {Navigate} from "react-router-dom";


export function Redirect<T extends { isAuth: boolean }>(Component: React.ComponentType<T>) {

    return (props: T) => {
        if (!props.isAuth) return <Navigate to="/login"/>
        return (
            <Component {...props}/>
        )
    }
}