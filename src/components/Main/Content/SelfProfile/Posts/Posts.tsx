import React from 'react';
import s from "./Posts.module.css";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import NewPosts from "./NewPosts/NewPosts";
import {initialProfileStateType} from "../../../../../redux/profile-reducer";
import {useSelector} from "react-redux";
import {ReduxStateType} from "../../../../../redux/redux-store";

function Posts() {

    let postsState = useSelector<ReduxStateType, initialProfileStateType>(state => state.profilePage)




    return (
        <div className={s.posts__body}>
            <NewPosts
            />

            <ProfilePosts
                postMessages={postsState.postMessages}
            />


        </div>
    )
}

export default Posts;