import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
    statusCode = 400;

    constructor(private msg: string) {
        super(msg);
        // only because a built-in class is extended
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeErrors() {
        return [{message: this.msg}];
    }
}