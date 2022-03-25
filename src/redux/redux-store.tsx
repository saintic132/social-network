import {combineReducers, createStore, Store} from "redux";
import profileReducer, {ProfileReducersActionType} from "./profile-reducer";
import dialogReducer, {AddNewMessageActionType} from "./dialog-reducer";
import usersReducer, {UsersActionType} from "./users-reducer";
import authReducer, {AuthReducerType} from "./auth-reducer";

export type ActionsType = AddNewMessageActionType | ProfileReducersActionType | UsersActionType | AuthReducerType

export type ReduxStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
})


let store: Store<ReduxStateType, ActionsType> = createStore(rootReducer)

export default store