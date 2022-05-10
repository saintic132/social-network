import React from 'react';
import AboutProfile from "./AboutProfile/AboutProfile";
import Posts from "./Posts/Posts";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

function SelfProfile() {
    return (
        <div>
            <div>
                <AboutProfile/>

                <ProfileStatus />

                <Posts/>
            </div>

        </div>
    )
}

export default SelfProfile;