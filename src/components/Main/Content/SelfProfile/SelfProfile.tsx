import React, {memo} from 'react';
import Posts from "./Posts/Posts";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {AboutProfile} from "./AboutProfile/AboutProfile";

const SelfProfile = memo(() => {

    return (
        <div>
            <AboutProfile/>

            <ProfileStatus/>

            <Posts/>
        </div>

    )
})

export default SelfProfile;