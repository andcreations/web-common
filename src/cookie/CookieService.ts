import * as cookie from 'cookie';
import { Service } from '@andcreations/common';

/** */
export interface CookieOptions {
  /** */
  secure?: boolean;
}

/** */
@Service()
export class CookieService {
  /** */
  get(name: string): string {
    const cookies = cookie.parse(document.cookie);
    return cookies[name];
  }

  /** */
  set(name: string, value: string, options?: CookieOptions): void {
    document.cookie = cookie.serialize(name, value, options);
  }
}