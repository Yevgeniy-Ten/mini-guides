import React from "react";
import ReactDOM from "react-dom"
import {Provider as Redux} from "react-redux"
import store from "./store";
import App from "./containers/App.jsx";

ReactDOM.render(
    <React.StrictMode>
        <Redux store={store}>
            <App/>
        </Redux>
    </React.StrictMode>, document.getElementById("root")
)