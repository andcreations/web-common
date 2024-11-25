import parse from 'url-parse';
import * as queryString from 'query-string';
import { ParsedURLParams, ParsedURL } from './ParsedURL';

/** */
function parseParams(hash: string): { path?: string; params: ParsedURLParams } {
  const index = hash.indexOf('?');
  let path;
  let params;
  if (index >= 0) {
    path = hash.substring(1, index);
    params = hash.substring(index + 1);
  }
  else {
    path = hash;
    params = '';
  }
  return {
    path,
    params: queryString.parse(params),
  };
}

/** */
export function parseURL(url: string): ParsedURL {
  const result = parse(url);
  const { params: queryParams } = parseParams(result.query);
  const { path: hashPath, params: hashParams } = parseParams(result.hash);
  return {
    protocol: result.protocol,
    host: result.host,
    ...(result?.port ? { port: result.port } : {}),
    path: result.pathname,
    queryParams,
    hashPath,
    hashParams,
  }
}
