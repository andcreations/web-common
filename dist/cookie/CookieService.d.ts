/** */
export interface CookieOptions {
    /** */
    secure?: boolean;
}
/** */
export declare class CookieService {
    /** */
    get(name: string): string;
    /** */
    set(name: string, value: string, options?: CookieOptions): void;
}
