"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acmeSdkLoaded = void 0;
exports.acmeSdkLoaded = new CustomEvent("acme-sdk-loaded", {
    bubbles: true,
    cancelable: true,
    composed: false,
    detail: {
        text: "acme-sdk-loaded event just happened",
    },
});
