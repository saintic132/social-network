import React from "react";
import {Store} from "redux";
import {ActionsType, ReduxStateType} from "./redux-store";



const StoreContext = React.createContext({} as Store<ReduxStateType, ActionsType>)

export default StoreContext