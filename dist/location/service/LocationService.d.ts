import { HTTPParams } from '@andcreations/common';
import { ParsedURL } from '../url';
/** */
export declare class LocationService {
    /** */
    getURL(): ParsedURL;
    /** */
    getHash(): string;
    /** */
    setHashParams(params: HTTPParams): void;
    /** */
    setHash(hash: string): void;
}
