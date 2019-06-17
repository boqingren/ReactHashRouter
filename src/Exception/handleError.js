const handleError = (errType, Exception) => {
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

export default handleError;