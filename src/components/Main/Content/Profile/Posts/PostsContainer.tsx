import Posts from "./Posts";
import {addPostMessageAC, PostMessagesType} from "../../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../../../redux/redux-store";
import {Dispatch} from "redux";


let today = new Date()
let time = today.getHours() + ':' + today.getMinutes()


type MapStatePropsType = {
    postMessages: PostMessagesType[]
}
let mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        postMessages: state.profilePage.postMessages
    }
}

type MapDispatchPropsType = {
    addNewPostMessage: (inputPost: string) => void
    addNewPostByKeyPress: (inputPost: string) => void
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addNewPostMessage: (inputPost: string) => {
            dispatch(addPostMessageAC(time, inputPost))
        },
        addNewPostByKeyPress: (inputPost: string) => {
            dispatch(addPostMessageAC(time, inputPost))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)


export default PostsContainer;