import React from 'react';
import AboutProfile from "./AboutProfile/AboutProfile";
import Posts from "./Posts/Posts";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

function SelfProfile() {
    return (
            <div>
                <AboutProfile/>

                <ProfileStatus />

                <Posts/>
            </div>

    )
}

export default SelfProfile;