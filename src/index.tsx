import ReactDOM from "react-dom";
import React from "react";
import {HashRouter} from "react-router-dom";
import App from "./App";


    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <App
                />
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );