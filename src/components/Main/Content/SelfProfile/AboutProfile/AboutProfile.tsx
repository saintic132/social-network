import React, {memo} from 'react';
import s from "./AboutProfile.module.css";

export const AboutProfile = memo(() => {
    return (
        <div className={s.aboutProfile}>
            <div className={s.aboutProfile__body}>
                <div className={s.aboutProfile__avatar}>
                    <div className={s.aboutProfile__img}>
                        <img
                            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
                            alt="avatarLogo"/>
                    </div>
                </div>
                <div className={s.aboutProfile__description}>
                    <div className={s.aboutProfile__about}>
                        <div>Name: Akhremchyk I.</div>
                        <div>Date of Birth: 17 December</div>
                        <div>City: Minsk</div>
                        <div>Education: IT-Incubator</div>
                        <div>Web Site: https://saintic132.github.io/social-network/</div>
                    </div>
                </div>
            </div>
        </div>
    )
})