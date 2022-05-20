import React, {memo} from 'react';
import s from "./Posts.module.css";
import {ProfilePosts} from "./ProfilePosts/ProfilePosts";
import {NewPosts} from "./NewPosts/NewPosts";
import {useAppSelector} from "../../../../../redux/redux-store";

export const Posts = memo(() => {

    const postsState = useAppSelector(state => state.profilePage)


    return (
        <div className={s.posts__body}>
            <NewPosts/>

            <ProfilePosts
                postMessages={postsState.postMessages}
            />


        </div>
    )
})

