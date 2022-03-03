import ReactDOM from "react-dom";
import React from "react";
import {HashRouter} from "react-router-dom";
import App from "./App";
import {addNewMessage, RootStateType} from "./redux/state";


export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <App
                    state={state}
                    addNewMessage={addNewMessage}
                />
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}