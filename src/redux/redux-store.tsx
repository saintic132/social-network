import {combineReducers, createStore} from "redux";
import profileReducer, {AddNewPostMessageActionType, initialProfileStateType} from "./profile-reducer";
import dialogReducer, {AddNewMessageActionType, initialDialogStateType} from "./dialog-reducer";

export type ActionsType = AddNewMessageActionType | AddNewPostMessageActionType

export type RootStateType = {
    dialogPage: initialDialogStateType
    profilePage: initialProfileStateType
}

let reducers = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer
})

let store = createStore(reducers)

export default store