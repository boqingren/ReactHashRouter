export default class Exception {
    static defaultError = {
        val: 0,
        handle: error => {
            console.log("未知异常！");
        }
    }

    static httpError = {
        val: 1,
        handle: error => {
            console.log(error);
        }
    }

    static envError = {
        val: 2,
        handle: error => {
            console.log(error);
        }
    }
}