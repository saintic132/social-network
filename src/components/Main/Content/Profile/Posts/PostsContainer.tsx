import React from 'react';
import {StateType} from "../../../../../App";
import Posts from "./Posts";
import {addPostMessageAC} from "../../../../../redux/profile-reducer";


function PostsContainer(props: StateType) {

    let state = props.store.getState()
    let today = new Date()
    let time = today.getHours() + ':' + today.getMinutes()



    const addNewPostMessage = (inputPost: string) => {
            props.store.dispatch(addPostMessageAC(time, inputPost))
    }

    const addNewPostByKeyPress = (inputPost: string) => {
            props.store.dispatch(addPostMessageAC(time, inputPost))
    }


    return (

        <Posts
            postMessages={state.profilePage.postMessages}
            addNewPostMessage={addNewPostMessage}
            addNewPostByKeyPress={addNewPostByKeyPress}
        />

    )
}

export default PostsContainer;