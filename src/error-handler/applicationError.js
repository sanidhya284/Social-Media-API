export default class ApplicationError extends Error {
	constructor(message, code) {
		super(message);
		this.code = code;
		Error.captureStackTrace(this, this.constructor);
	}
}
