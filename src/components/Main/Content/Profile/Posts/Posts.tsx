import React from 'react';
import s from "./Posts.module.css";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import NewPosts from "./NewPosts/NewPosts";
import {StateType} from "../../../../../App";

function Posts(props: StateType) {
    return (
        <div className={s.posts__body}>
            <NewPosts
                dispatch={props.dispatch}
            />

            {
                props.state.profilePage.postMessages.map(el => {
                    return (
                        <ProfilePosts
                            key={el.id}
                            {...el}
                        />
                    )
                })
            }

        </div>
    )
}

export default Posts;