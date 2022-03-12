import {combineReducers, createStore, Store} from "redux";
import profileReducer, {AddNewPostMessageActionType} from "./profile-reducer";
import dialogReducer, {AddNewMessageActionType} from "./dialog-reducer";

export type ActionsType = AddNewMessageActionType | AddNewPostMessageActionType

type RootStateReducers = typeof reducers;
export type ReduxStateType = ReturnType<RootStateReducers>

let reducers = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer
})



let store: Store<ReduxStateType, ActionsType> = createStore(reducers)

//@ts-ignore
window.store = store

export default store