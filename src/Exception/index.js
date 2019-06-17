import Ast from "../Assert";

export default class Exception {

	constructor(opt) {
		this.type = Ast.isNumber(opt.type)? opt.type: Exception.defaultError.val;
		this.name = Ast.isString(opt.name)? opt.name: Exception.defaultError.name;
		this.desc = Ast.isString(opt.desc)? opt.desc: "";
		this.data = Ast.isObject(opt.data)? opt.data: {};
		this.callback = Ast.isFunction(opt.callback)? opt.callback: data => {
			console.log(data);
		};
	}

	static runInTryCatch = runTask => {
		try {
			if (Ast.isFunction(runTask)) runTask();
		} catch (error) {
			debugger;
			if (error && Ast.isNumber(error.type)) Exception.handleError(error);
		}
	}

	static handleError = error => {
		switch (error.type) {
			case Exception.httpError.val:
				Exception.httpError.handle(error);
				break;

			case Exception.envError.val:
				Exception.envError.handle(error);
				break;

			default:
				Exception.defaultError.handle(error);
				break;
		};
	}

	static defaultError = {
		val: 0,
		name: "Exception.defaultError",
		handle: error => {
			console.log("Exception.defaultError: ", error);
		}
	}

	static httpError = {
		val: 1,
		name: "Exception.httpError",
		handle: error => {
			console.log("Exception.httpError: ", error);
		}
	}

	static envError = {
		val: 2,
		name: "Exception.envError",
		handle: error => {
			console.log("Exception.envError: ", error);
			alert(("Exception.envError: ", error));
		}
	}
}