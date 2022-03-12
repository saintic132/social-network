import React from 'react';
import AboutProfile from "./AboutProfile/AboutProfile";
import {StateType} from "../../../../App";
import PostsContainer from "./Posts/PostsContainer";

function Profile(props: StateType) {
    return (
        <div>
            <AboutProfile/>
            <PostsContainer
                store={props.store}
            />
        </div>
    )
}

export default Profile;