import React from 'react';
import s from "./Posts.module.css";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import NewPosts from "./NewPosts/NewPosts";
import {PostMessagesType} from "../../../../../redux/profile-reducer";

type PostType = {
    postMessages: PostMessagesType[]
    addNewPostMessage: (inputPost: string) => void
    addNewPostByKeyPress: (inputPost: string) => void
}

function Posts(props: PostType) {

    return (
        <div className={s.posts__body}>
            <NewPosts
                addNewPostMessage={props.addNewPostMessage}
                addNewPostByKeyPress={props.addNewPostByKeyPress}
            />

            <ProfilePosts
                postMessages={props.postMessages}
            />


        </div>
    )
}

export default Posts;