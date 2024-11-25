import { HTTPParams, HTTPResponse } from '@andcreations/common';
/** */
declare type HTTPHeaders = {
    [key: string]: string;
};
/** */
export interface HTTPQueryOptions {
    /** */
    headers?: HTTPHeaders;
}
/** */
export declare class HTTPWebClientService {
    /** Axios HTTP client. */
    private axios;
    /** */
    constructor();
    /** */
    static getServerURL(): string;
    /** */
    private url;
    /** */
    private headers;
    /** */
    private config;
    /** */
    private toHTTPResponse;
    /** */
    get<T>(urlPath: string, queryParams?: HTTPParams, options?: HTTPQueryOptions): Promise<HTTPResponse<T>>;
    /** */
    post<B, T = void>(urlPath: string, body: B, options?: HTTPQueryOptions): Promise<HTTPResponse<T>>;
}
export {};
