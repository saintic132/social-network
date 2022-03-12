import React from 'react';
import Posts from "./Posts";
import {addPostMessageAC} from "../../../../../redux/profile-reducer";
import {Store} from "redux";
import {ActionsType, ReduxStateType} from "../../../../../redux/redux-store";
import StoreContext from "../../../../../redux/store-context";

export type StateType = {
    store: Store<ReduxStateType, ActionsType>
}


function PostsContainer() {

    return (

        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()
                    let today = new Date()
                    let time = today.getHours() + ':' + today.getMinutes()


                    const addNewPostMessage = (inputPost: string) => {
                        store.dispatch(addPostMessageAC(time, inputPost))
                    }

                    const addNewPostByKeyPress = (inputPost: string) => {
                        store.dispatch(addPostMessageAC(time, inputPost))
                    }


                    return (
                        <Posts
                            postMessages={state.profilePage.postMessages}
                            addNewPostMessage={addNewPostMessage}
                            addNewPostByKeyPress={addNewPostByKeyPress}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}


export default PostsContainer;