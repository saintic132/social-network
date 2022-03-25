import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType, setProfileAC} from "../../../../redux/profile-reducer";
import {ReduxStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import {useParams} from "react-router-dom";
import React from "react";
import Preloader from "../../../../common/Preloader/Preloader";


type MapDispatchToPropsType = {
    setProfile: (profile: ProfileType) => void
}

let mapStateToProps = (state: ReduxStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setProfile: (profile: ProfileType) => {
            dispatch(setProfileAC(profile))
        }
    }
}

export type ProfilePropsType = {
    profile: ProfileType | null
    setProfile: (profile: ProfileType) => void
}

function ProfileRequest(props: ProfilePropsType) {
    let {userId} = useParams()

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                props.setProfile(response.data)
            })


    if (!props.profile)
        return <Preloader />

    return (

        <Profile
            {...props}
        />
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileRequest)