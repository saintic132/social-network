import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType, setProfileAC} from "../../../../redux/profile-reducer";
import {ReduxStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";


let mapStateToProps = (state: ReduxStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

type MapDispatchToPropsType = {
    setProfile: (profile: ProfileType) => void
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setProfile: (profile: ProfileType) => {
            dispatch(setProfileAC(profile))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)