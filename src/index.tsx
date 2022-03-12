import ReactDOM from "react-dom";
import {Store} from "redux";
import React from "react";
import {HashRouter} from "react-router-dom";
import App from "./App";
import store, {ActionsType, ReduxStateType} from "./redux/redux-store";
import Provider from "./Provider";

const rerenderEntireTree = (store: Store<ReduxStateType, ActionsType>) => {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <Provider store={store}>
                    <App
                    />
                </Provider>
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store)

store.subscribe(() => {
    rerenderEntireTree(store)
})