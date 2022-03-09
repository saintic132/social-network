import React from 'react';
import s from "./ProfilePosts.module.css";

type ProfilePropsType = {
    time: string
    postMessage: string
    counterLike: number
}

function ProfilePosts(props: ProfilePropsType) {
    return (
        <div className={s.profileposts}>
            <div className={s.profileposts__body}>
                <div className={s.profileposts__container}>
                    <div className={s.profileposts__avatar}>
                        <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png" alt="avatar"/>
                    </div>
                    <div className={s.profileposts__content}>
                        <div className={s.profileposts__time}>
                            {props.time}
                        </div>
                        <div className={s.profileposts__message}>
                            {props.postMessage}
                        </div>
                    </div>
                </div>
                <div className={s.profileposts__dipslaylikes}>
                    <div className={s.profileposts__likes}>
                        <div className={s.profileposts__likes_title}>
                            Likes:
                        </div>
                        <div className={s.profileposts__countlikes}>
                            {props.counterLike}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePosts;