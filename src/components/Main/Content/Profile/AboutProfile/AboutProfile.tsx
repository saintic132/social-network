import React from 'react';
import s from "./AboutProfile.module.css";

function AboutProfile() {
    return (
        <div className={s.aboutProfile}>
            <img
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
                alt="avatarLogo"/>
            <div className={s.myProfile}>
                <div>Name: Akhremchyk I.</div>
                <div>Date of Birth: 17 December</div>
                <div>City: Minsk</div>
                <div>Education: IT-Incubator</div>
                <div>Web Site: https://saintic132.github.io/social-network/</div>
            </div>
        </div>
    )
}

export default AboutProfile;