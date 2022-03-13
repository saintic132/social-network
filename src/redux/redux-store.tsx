import {combineReducers, createStore, Store} from "redux";
import profileReducer, {AddNewPostMessageActionType} from "./profile-reducer";
import dialogReducer, {AddNewMessageActionType} from "./dialog-reducer";

export type ActionsType = AddNewMessageActionType | AddNewPostMessageActionType

export type ReduxStateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer
})


let store: Store<ReduxStateType, ActionsType> = createStore(reducers)

export default store