import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunk from 'redux-thunk'
import profileReducer, {ProfileReducersActionType} from "./profile-reducer";
import dialogReducer, {AddNewMessageActionType} from "./dialog-reducer";
import usersReducer, {UsersActionType} from "./users-reducer";
import authReducer, {AuthReducerType} from "./auth-reducer";
import contentReducer from "./content-reducer";

export type ActionsType = AddNewMessageActionType | ProfileReducersActionType | UsersActionType | AuthReducerType

export type ReduxStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    content: contentReducer
})


let store: Store<ReduxStateType, ActionsType> = createStore(rootReducer, applyMiddleware(thunk))

export default store