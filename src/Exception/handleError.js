export default class Exception {

    static runInTryCatch = runTask => {
        try {
            runTask();
        } catch (error) {
            debugger;
            if (error && typeof error.type === "number") {
                Exception.handleError(error.type);
            }
        }
    }

    static handleError = errType => {
        switch (errType) {
            case Exception.httpError.val:
                Exception.httpError.handle(Exception);
                break;
    
            case Exception.envError.val:
                Exception.envError.handle(Exception);
                break;
    
            default:
                Exception.defaultError.handle(Exception);
                break;
        };
    }

    static defaultError = {
        val: 0,
        name: "defaultError",
        handle: error => {
            console.log("defaultError", error);
        }
    }

    static httpError = {
        val: 1,
        name: "httpError",
        handle: error => {
            console.log("httpError", error);
        }
    }

    static envError = {
        val: 2,
        name: "envError",
        handle: error => {
            debugger;
            console.log("envError", error);
        }
    }
}