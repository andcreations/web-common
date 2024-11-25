/** */
export declare type ParsedURLParams = {
    [key: string]: string | null | Array<string | null>;
};
/** */
export interface ParsedURL {
    /** */
    protocol: string;
    /** */
    host: string;
    /** */
    port?: string;
    /** */
    path: string;
    /** */
    queryParams: ParsedURLParams;
    /** */
    hashPath?: string;
    /** */
    hashParams: ParsedURLParams;
}
