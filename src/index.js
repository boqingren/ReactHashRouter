import React from "react";
import ReactDOM from "react-dom";
import ReduxProvider from "./Store/ReduxProvider";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
    <ReduxProvider>
        <App />
    </ReduxProvider>,
    document.getElementById("root")
);
serviceWorker.unregister();