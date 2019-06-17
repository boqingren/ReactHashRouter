export default class Assert {

	// 判断一个值是否为 undefined ？
	static isUndefined(param) {
		return param === undefined;
	}

	// 判断一个值是否为 null ？
	static isNull(param) {
		return param === null;
	}

	// 判断一个值的类型是否为 Boolean ？
	static isBoolean(param) {
		return typeof param === "boolean";
	}

	// 判断一个值的类型是否为 Number ？
	static isNumber(param) {
		return typeof param === "number";
	}

	//  判断一个值的类型是否为 String ？
	static isString(param) {
		return typeof param === "string";
	}

	// 判断一个值的类型是否为 Array ？
	static isArray(param) {
		return Array.isArray(param);
	}

	// 判断一个值是否为 object ？
	static isObject(param) {
		return (
			typeof param === "object"
			&& !Assert.isNull(param)
			&& !Assert.isArray(param)
			&& !Assert.isFunction(param)
		);
	}

	//  判断一个值的类型是否为 Function ？
	static isFunction(param) {
		return typeof param === "function";
	}

	// 判断一个值是否为 true ？
	static isTrue(param) {
		return param == true;
	}

	// 判断一个值是否为严格的 false ？
	static isFalse(param) {
		return param == false;
	}

	// 判断一个值是否为 true ？
	static isExactTrue(param) {
		return param === true;
	}

	// 判断一个值是否为严格的 false ？
	static isExactFalse(param) {
		return param === false;
	}

	// 判断一个值是否为 0 ？
	static isZero(param) {
		return Assert.isNumber(param) && param === 0;
	}

	// 判断一个值是否为 empty string ？
	static isEmptyString(param) {
		return Assert.isString(param) && param.length === 0;
	}

	// 判断一个值是否为 empty array ？
	static isEmptyArray(param) {
		return Assert.isArray(param) && param.length === 0;
	}

	// 判断一个值是否为 empty object ？
	static isEmptyObject(param) {
		return Assert.isObject(param) && param.length === 0;
	}

	// 判断一个值是否为 empty：undefined、null、empty string、empty array、empty object，0 零不被认为是空的
	static isEmpty(param) {
		return (
			Assert.isUndefined(param)
			|| Assert.isEmptyString(param)
			|| Assert.isNull(param)
			|| Assert.isEmptyArray(param)
			|| Assert.isEmptyObject(param)
		);
	}
}