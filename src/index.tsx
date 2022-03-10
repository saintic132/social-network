import ReactDOM from "react-dom";
import React from "react";
import {HashRouter} from "react-router-dom";
import App from "./App";
import store, {RootStateType} from "./redux/redux-store";

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                />
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})