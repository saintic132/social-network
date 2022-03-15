import Posts from "./Posts";
import {addPostMessageAC} from "../../../../../redux/profile-reducer";
import {connect} from "react-redux";


let today = new Date()
let time = today.getHours() + ':' + today.getMinutes()

let mapStateToProps = (state: any) => {
    return {
        postMessages: state.profilePage.postMessages
    }
}

let mapDispatchToProps = (dispatch: any) => {
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