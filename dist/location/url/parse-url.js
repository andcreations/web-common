"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseURL = void 0;
const url_parse_1 = __importDefault(require("url-parse"));
const queryString = __importStar(require("query-string"));
/** */
function parseParams(hash) {
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
function parseURL(url) {
    const result = (0, url_parse_1.default)(url);
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
    };
}
exports.parseURL = parseURL;
