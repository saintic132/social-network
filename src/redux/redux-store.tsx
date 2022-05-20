import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunk, {ThunkDispatch} from 'redux-thunk'
import profileReducer, {ProfileReducersActionType} from "./profile-reducer";
import dialogReducer, {AddNewMessageActionType} from "./dialog-reducer";
import usersReducer, {UsersActionType} from "./users-reducer";
import authReducer, {AuthReducerType} from "./auth-reducer";
import contentReducer, {ContentActionsType} from "./content-reducer";
import {useDispatch} from "react-redux";

export type ActionsType =
    AddNewMessageActionType
    | ProfileReducersActionType
    | UsersActionType
    | AuthReducerType
    | ContentActionsType

export type ReduxStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    content: contentReducer
})


let store: Store<ReduxStateType, ActionsType> = createStore(rootReducer, applyMiddleware(thunk))

export type TypedDispatch = ThunkDispatch<ReduxStateType, any, ActionsType>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();


export default store