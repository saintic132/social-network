import React from 'react';
import AboutProfile from "./AboutProfile/AboutProfile";
import {StateType} from "../../../../App";
import PostsContainer from "./Posts/PostsContainer";

function Profile(props: StateType) {
    return (
        <div>
            <AboutProfile/>
            <PostsContainer
                state={props.state}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;