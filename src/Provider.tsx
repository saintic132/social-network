import React from "react";
import StoreContext from "./redux/store-context";
import {Store} from "redux";
import {ActionsType, ReduxStateType} from "./redux/redux-store";

type ProviderType = {
    store: Store<ReduxStateType, ActionsType>
    children: any
}

const Provider = (props: ProviderType) => {
    return (
        <div>
            <StoreContext.Provider value={props.store}>
                {props.children}
            </StoreContext.Provider></div>
    )
}

export default Provider