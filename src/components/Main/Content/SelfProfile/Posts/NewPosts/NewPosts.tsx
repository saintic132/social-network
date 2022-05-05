import React, {useState} from 'react';
import s from "./NewPosts.module.css";
import {useDispatch} from "react-redux";
import {addPostMessageAC} from "../../../../../../redux/profile-reducer";

function NewPosts() {
    let today = new Date()
    let time = today.getHours() + ':' + today.getMinutes()

    let [inputPost, setInputPost] = useState<string>('');
    let dispatch = useDispatch()


    const addNewPostMessage = () => {
        if (inputPost) {
            dispatch(addPostMessageAC(time, inputPost))
            setInputPost('')
        }
    }

    const addNewPostByKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (inputPost && e.key === 'Enter') {
            dispatch(addPostMessageAC(time, inputPost))
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