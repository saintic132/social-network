import React from 'react';
import s from "./Posts.module.css";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import NewPosts from "./NewPosts/NewPosts";

function Posts() {
    return (
        <div className={s.posts}>
            <NewPosts/>
            <ProfilePosts/>
        </div>
    )
}

export default Posts;