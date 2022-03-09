import React, {useState} from 'react';
import s from "./NewPosts.module.css";
import {ActionsType} from "../../../../../../redux/state";
import {addPostMessageAC} from "../../../../../../redux/profile-reducer";

type NewPostType = {
    dispatch: (action: ActionsType) => void
}

function NewPosts(props: NewPostType) {

    let [inputPost, setInputPost] = useState<string>('');
    let today = new Date()
    let time = today.getHours() + ':' + today.getMinutes()

    const addNewPostMessage = () => {
        if (inputPost) {
            props.dispatch(addPostMessageAC(time, inputPost))
            setInputPost('')
        }
    }

    const addNewPostByKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (inputPost && e.key === 'Enter') {
            props.dispatch(addPostMessageAC(time, inputPost))
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