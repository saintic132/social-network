import ReactDOM from "react-dom";
import React from "react";
import {HashRouter} from "react-router-dom";
import App from "./App";
import {RootStateType, store} from './redux/state'

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <App
                    state={state}
                    addNewMessage={store.addNewMessage.bind(store)}
                />
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())