import React, {useState} from 'react';
import s from "./NewPosts.module.css";

type NewPostType = {
    addNewPostMessage: (inputPost: string) => void
    addNewPostByKeyPress: (inputPost: string) => void
}

function NewPosts(props: NewPostType) {

    let [inputPost, setInputPost] = useState<string>('');

    const addNewPostMessage = () => {
        if (inputPost) {
            props.addNewPostMessage(inputPost)
            setInputPost('')
        }
    }

    const addNewPostByKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (inputPost && e.key === 'Enter') {
            props.addNewPostByKeyPress(inputPost)
            setInputPost('')
        }
    }

    const newInputPost = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPost(e.currentTarget.value)
    }

    return (
        <div>
            <div className={s.nameMyPosts}>
                My posts
            </div>
            <div
                className={s.writePosts}>
                <input
                    className={s.inputForNewPost}
                    value={inputPost}
                    onChange={newInputPost}
                    onKeyPress={addNewPostByKeyPress}
                    type="text"
                    placeholder='Enter the text'
                />
                <button
                    className={s.submitInputButtonForPost}
                    onClick={addNewPostMessage}
                >Add post
                </button>
            </div>
        </div>
    )
}

export default NewPosts;