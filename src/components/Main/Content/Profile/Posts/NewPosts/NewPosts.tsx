import React from 'react';
import s from "./NewPosts.module.css";

function NewPosts() {
    return (
        <div>
            <div className={s.nameMyPosts}>
                My posts
            </div>
            <div
                className={s.writePosts}>
                <input
                    className={s.inputForNewPost}
                    type="text"
                    placeholder='Enter the text'/>
                <button
                    className={s.submitInputButtonForPost}
                >Submit
                </button>
            </div>
        </div>
    )
}

export default NewPosts;