import { Axios, AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  HTTPParams,
  HTTPResponse,
  HTTPError,
  toHTTPResponse,
  URLBuilder,
  Service,
} from '@andcreations/common';
import { ServerResponseError } from '../error';

/** */
type HTTPHeaders = { [key: string]: string };

/** */
export interface HTTPQueryOptions {
  /** */
  headers?: HTTPHeaders;
}

/** */
const DEFAULT_HEADERS: HTTPHeaders = {
  'Accept': 'application/json',
  'content-type': 'application/json',
};

/** */
@Service()
export class HTTPWebClientService {
  /** Axios HTTP client. */
  private axios: Axios;

  /** */
  constructor() {
    this.axios = new Axios({});
  }

  /** */
  static getServerURL(): string {
    return `${window.location.protocol}//` +
      `${window.location.hostname}:${window.location.port}`;
  }

  /** */
  private url(urlPath: string, queryParams?: HTTPParams): string {
    const url = HTTPWebClientService.getServerURL() + urlPath;
    return URLBuilder.build(url, queryParams);
  }

  /** */
  private headers(extraHeaders?: HTTPHeaders): HTTPHeaders {
    return Object.assign(DEFAULT_HEADERS, extraHeaders ?? {});
  }

  /** */
  private config(
    options?: Pick<HTTPQueryOptions, 'headers'>,
  ): AxiosRequestConfig<unknown> {
    return {
      headers: this.headers(options?.headers),
    };
  }

  /** */
  private toHTTPResponse<T>(
    response: AxiosResponse<string>
  ): HTTPResponse<T> {
    try {
      return toHTTPResponse(response);
    } catch (error) {
      if (error instanceof HTTPError) {
        const payload = JSON.parse(error.message);
        throw new ServerResponseError(
          payload.code,
          payload.message,
          error.status,
        );
      }
      throw error;
    }
  }

  /** */
  async get<T>(
    urlPath: string,
    queryParams?: HTTPParams,
    options?: HTTPQueryOptions,
  ): Promise<HTTPResponse<T>> {
    const response = await this.axios.get<string>(
      this.url(urlPath, queryParams),
      this.config({
        headers: options?.headers,
      }),
    );
    return this.toHTTPResponse(response);
  }

  /** */
  async post<B,T = void>(
    urlPath: string,
    body: B,
    options?: HTTPQueryOptions,
  ): Promise<HTTPResponse<T>> {
    const response = await this.axios.post<string>(
      this.url(urlPath),
      JSON.stringify(body),
      this.config({
        headers: options?.headers,
      }),
    );
    return this.toHTTPResponse(response);
  }

  /** */
  async put<B,T = void>(
    urlPath: string,
    body: B,
    options?: HTTPQueryOptions,
  ): Promise<HTTPResponse<T>> {
    const response = await this.axios.put<string>(
      this.url(urlPath),
      JSON.stringify(body),
      this.config({
        headers: options?.headers,
      }),
    );
    return this.toHTTPResponse(response);
  }

  /** */
  async patch<B,T = void>(
    urlPath: string,
    body: B,
    options?: HTTPQueryOptions,
  ): Promise<HTTPResponse<T>> {
    const response = await this.axios.patch<string>(
      this.url(urlPath),
      JSON.stringify(body),
      this.config({
        headers: options?.headers,
      }),
    );
    return this.toHTTPResponse(response);
  }

  /** */
  async delete<T = void>(
    urlPath: string,
    queryParams?: HTTPParams,
    options?: HTTPQueryOptions,
  ): Promise<HTTPResponse<T>> {
    const response = await this.axios.delete<string>(
      this.url(urlPath, queryParams),
      this.config({
        headers: options?.headers,
      }),
    );
    return this.toHTTPResponse(response);
  }
}