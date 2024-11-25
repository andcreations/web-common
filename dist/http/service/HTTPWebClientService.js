"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var HTTPWebClientService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPWebClientService = void 0;
const axios_1 = require("axios");
const common_1 = require("@andcreations/common");
const error_1 = require("../error");
/** */
const DEFAULT_HEADERS = {
    'Accept': 'application/json',
    'content-type': 'application/json',
};
/** */
let HTTPWebClientService = HTTPWebClientService_1 = class HTTPWebClientService {
    /** */
    constructor() {
        this.axios = new axios_1.Axios({});
    }
    /** */
    static getServerURL() {
        return `${window.location.protocol}//` +
            `${window.location.hostname}:${window.location.port}`;
    }
    /** */
    url(urlPath, queryParams) {
        const url = HTTPWebClientService_1.getServerURL() + urlPath;
        return common_1.URLBuilder.build(url, queryParams);
    }
    /** */
    headers(extraHeaders) {
        return Object.assign(DEFAULT_HEADERS, extraHeaders ?? {});
    }
    /** */
    config(options) {
        return {
            headers: this.headers(options?.headers),
        };
    }
    /** */
    toHTTPResponse(response) {
        try {
            return (0, common_1.toHTTPResponse)(response);
        }
        catch (error) {
            if (error instanceof common_1.HTTPError) {
                const payload = JSON.parse(error.message);
                throw new error_1.ServerResponseError(payload.code, payload.message, error.status);
            }
            throw error;
        }
    }
    /** */
    async get(urlPath, queryParams, options) {
        const response = await this.axios.get(this.url(urlPath, queryParams), this.config({
            headers: options?.headers,
        }));
        return this.toHTTPResponse(response);
    }
    /** */
    async post(urlPath, body, options) {
        const response = await this.axios.post(this.url(urlPath), JSON.stringify(body), this.config({
            headers: options?.headers,
        }));
        return this.toHTTPResponse(response);
    }
};
HTTPWebClientService = HTTPWebClientService_1 = __decorate([
    (0, common_1.Service)(),
    __metadata("design:paramtypes", [])
], HTTPWebClientService);
exports.HTTPWebClientService = HTTPWebClientService;
