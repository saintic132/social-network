import React from 'react';
import AboutProfile from "./AboutProfile/AboutProfile";
import Posts from "./Posts/Posts";
import {StateType} from "../../../../App";

function Profile(props: StateType) {
    return (
        <div>
            <AboutProfile/>
            <Posts
                state={props.state}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;