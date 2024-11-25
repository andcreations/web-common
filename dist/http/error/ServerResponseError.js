"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerResponseError = void 0;
/** */
class ServerResponseError {
    /** */
    constructor(code, message, status) {
        this.code = code;
        this.message = message;
        this.status = status;
    }
    /** */
    getCode() {
        return this.code;
    }
    /** */
    getMessage() {
        return this.message;
    }
    /** */
    getStatus() {
        return this.status;
    }
    /** */
    static hasStatus(error, status) {
        return error instanceof ServerResponseError && error.status === status;
    }
}
exports.ServerResponseError = ServerResponseError;
