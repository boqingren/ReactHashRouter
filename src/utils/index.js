import Exception from "../Exception";

export const handleError = (errType, Exception) => {
    switch (errType) {
        case Exception.httpError.val:               // http 异常
            Exception.httpError.handle(Exception);
            break;

        case Exception.envError.val:                // 环境变量异常
            Exception.envError.handle(Exception);
            break;

        default:                                    // 未知异常
            Exception.defaultError.handle(Exception);
            break;
    };
};

export const runInTryCatch = (handleError, runApp) => {
    try {
        runApp();
    } catch (error) {
        if (error && typeof error.type === "number") {
            handleError(error.type, Exception);
        }
    }
};

// try {
//     throw {
//         type: Exception.envError.val,
//         desc: "",
//         data: { a: 1, b: 2 },
//         callback: data => {
//             console.log(data);
//         }
//     };
// } catch (error) {
//     if (error && typeof error.type === "number") {
//         handleError(error.type, Exception);
//     }
// }