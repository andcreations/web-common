import { HTTPParams, Service, URLBuilder } from '@andcreations/common';
import { ParsedURL, parseURL } from '../url';

/** */
@Service()
export class LocationService {
  /** */
  getURL(): ParsedURL {
    return parseURL(window.location.href);
  }

  /** */
  getHash(): string {
    return this.getURL().hashPath;
  }

  /** */
  setHashParams(params: HTTPParams): void {
    const url = this.getURL();
    const hash = url.hashPath + URLBuilder.buildQueryParams(params);
    window.location.hash = hash;
  }

  /** */
  setHash(hash: string): void {
    window.location.hash = hash;
  }
}