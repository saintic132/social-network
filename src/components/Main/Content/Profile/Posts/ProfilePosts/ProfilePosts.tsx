import React from 'react';
import s from "./ProfilePosts.module.css";
import {PostMessagesType} from "../../../../../../redux/profile-reducer";

type ProfilePostPropsType = {
    postMessages: PostMessagesType[]
}

function ProfilePosts(props: ProfilePostPropsType) {
    return (
        <div className={s.profileposts}>
        {
            props.postMessages.map(el => {
                return (
                    <div className={s.profileposts__body}>
                        <div className={s.profileposts__container}>
                            <div className={s.profileposts__avatar}>
                                <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png" alt="avatar"/>
                            </div>
                            <div className={s.profileposts__content}>
                                <div className={s.profileposts__time}>
                                    {el.time}
                                </div>
                                <div className={s.profileposts__message}>
                                    {el.postMessage}
                                </div>
                            </div>
                        </div>
                        <div className={s.profileposts__dipslaylikes}>
                            <div className={s.profileposts__likes}>
                                <div className={s.profileposts__likes_title}>
                                    Likes:
                                </div>
                                <div className={s.profileposts__countlikes}>
                                    {el.counterLike}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>




    )
}

export default ProfilePosts;