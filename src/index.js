import React from "react";
import ReactDOM from "react-dom";
import ReduxProvider from "./Store/ReduxProvider";
import App from "./App";
import runInTryCatch from "./Exception/";
import Exception from "./Exception/Exception";
import handleError from "./Exception/handleError";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

runInTryCatch(Exception, handleError, () => {
    ReactDOM.render(
        <ReduxProvider>
            <App />
        </ReduxProvider>,
        document.getElementById("root")
    );
    serviceWorker.unregister();
});