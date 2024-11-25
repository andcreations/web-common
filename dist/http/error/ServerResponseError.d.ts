/** */
export declare class ServerResponseError {
    private readonly code;
    private readonly message;
    private readonly status;
    /** */
    constructor(code: string, message: string, status: number);
    /** */
    getCode(): string;
    /** */
    getMessage(): string;
    /** */
    getStatus(): number;
    /** */
    static hasStatus(error: any, status: number): boolean;
}
