import Assert from "./index";

export default class ErrorAssert extends Assert {

    // 创建一个error实例，表示错误的原因：与 eval() 有关
    isEvalError(error) {
        return error instanceof EvalError;
    }

    // 创建一个代表 Javascript 引擎内部错误的异常抛出的实例。 如: "递归太多"
    isInternalError(error) {
        return error instanceof InternalError;
    }

    // 创建一个error实例，表示错误的原因：数值变量或参数超出其有效范围
    isRangeError(error) {
        return error instanceof RangeError;
    }

    // 创建一个error实例，表示错误的原因：无效引用
    isReferenceError(error) {
        return error instanceof ReferenceError;
    }

    // SyntaxError
    isSyntaxError(error) {
        return error instanceof SyntaxError;
    }

    // 创建一个error实例，表示错误的原因：变量或参数不属于有效类型
    isTypeError(error) {
        return error instanceof TypeError;
    }

    // 创建一个error实例，表示错误的原因：给 encodeURI()或  decodeURl() 传递的参数无效
    isURIError(error) {
        return error instanceof URIError;
    }
}