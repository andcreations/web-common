import { parseURL } from './parse-url';
import { ParsedURL } from './ParsedURL';

describe('parse-url', () => {
  const expectURL = (url: string, parsedUrl: ParsedURL) => {
    expect(parseURL(url)).toEqual(parsedUrl);
  }

  it('should parse a simple URL', () => {
    expectURL(
      'http://example.com',
      {
        protocol: 'http:',
        host: 'example.com',
        path: '/',
        queryParams: {},
        hashPath: '',
        hashParams: {},
      }
    );
  });

  it('should parse a URL with path', () => {
    expectURL(
      'http://example.com/api/v1/items',
      {
        protocol: 'http:',
        host: 'example.com',
        path: '/api/v1/items',
        queryParams: {},
        hashPath: '',
        hashParams: {},
        }
    );
  });

  it('should parse a URL with query parameters', () => {
    expectURL(
      'http://example.com/api/v1/items?id=deadbeef&details=false',
      {
        protocol: 'http:',
        host: 'example.com',
        path: '/api/v1/items',
        queryParams: {
          id: 'deadbeef',
          details: 'false',
        },
        hashPath: '',
        hashParams: {},
      }
    );
  });

  it('should parse a URL with hash path and a single hash param', () => {
    expectURL(
      'http://example.com/#/requests?id=deadbeef',
      {
        protocol: 'http:',
        host: 'example.com',
        path: '/',
        queryParams: {},
        hashPath: '/requests',
        hashParams: {
          id: 'deadbeef',
        },
      }
    );
  });

  it('should parse a URL with hash', () => {
    expectURL(
      'http://example.com/#/data/full?id=deadbeef&children=17',
      {
        protocol: 'http:',
        host: 'example.com',
        path: '/',
        queryParams: {},
        hashPath: '/data/full',
        hashParams: {
          id: 'deadbeef',
          children: '17',
        },
      }
    );
  });

  it('should parse a complex URL', () => {
    expectURL(
      'http://example.com/api/v7/data?token=zSvxL4Oook4G2mieap2zF#/full?id=deadbeef&children=17',
      {
        protocol: 'http:',
        host: 'example.com',
        path: '/api/v7/data',
        queryParams: {
          token: 'zSvxL4Oook4G2mieap2zF',
        },
        hashPath: '/full',
        hashParams: {
          id: 'deadbeef',
          children: '17',
        },
      }
    );
  });
});