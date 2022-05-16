import ReactDOM from "react-dom";
import React from "react";
import {HashRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

    ReactDOM.render(
            <HashRouter>
                <Provider store={store}>
                    <App
                    />
                </Provider>
            </HashRouter>,
        document.getElementById('root')
    );

