"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationService = void 0;
const common_1 = require("@andcreations/common");
const url_1 = require("../url");
/** */
let LocationService = class LocationService {
    /** */
    getURL() {
        return (0, url_1.parseURL)(window.location.href);
    }
    /** */
    getHash() {
        return this.getURL().hashPath;
    }
    /** */
    setHashParams(params) {
        const url = this.getURL();
        const hash = url.hashPath + common_1.URLBuilder.buildQueryParams(params);
        window.location.hash = hash;
    }
    /** */
    setHash(hash) {
        window.location.hash = hash;
    }
};
LocationService = __decorate([
    (0, common_1.Service)()
], LocationService);
exports.LocationService = LocationService;
