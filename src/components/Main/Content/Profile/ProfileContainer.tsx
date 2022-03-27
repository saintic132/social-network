import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType, setProfileAC} from "../../../../redux/profile-reducer";
import {ReduxStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";
import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import Preloader from "../../../../common/Preloader/Preloader";
import {profileAPI} from "../../../../common/API/API";


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
    let {userId} = useParams<'userId'>()

    useEffect(() => {
        profileAPI.setProfile(userId)
            .then(data => {
                props.setProfile(data)
            })
    }, [])


    if (!props.profile)
        return <Preloader />

    return (

        <Profile
            {...props}
        />
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileRequest)