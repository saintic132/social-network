import React, {useRef} from 'react';
import s from "./NewPosts.module.css";

function NewPosts() {

    let messagePostRef = useRef<any>(null)

    const addPost = () => {
        let text = messagePostRef.current?.value
        console.log(text)
    }

    return (
        <div>
            <div className={s.nameMyPosts}>
                My posts
            </div>
            <div
                className={s.writePosts}>
                <input
                    ref={messagePostRef}
                    className={s.inputForNewPost}
                    type="text"
                    placeholder='Enter the text'/>
                <button
                    className={s.submitInputButtonForPost}
                    onClick={addPost}
                >Add post
                </button>
            </div>
        </div>
    )
}

export default NewPosts;