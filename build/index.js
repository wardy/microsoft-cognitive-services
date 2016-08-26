"use strict";
const cognitive_service_1 = require("./classes/cognitive-service");
const URL_ts_1 = require("./constants/URL.ts");
function isBinaryImage(detectFaceOptions) {
    return detectFaceOptions.binaryImage !== undefined;
}
function isImageURL(detectFaceOptions) {
    return detectFaceOptions.image !== undefined;
}
function buildDetectFaceURL(detectFaceOptions, url) {
    if (isImageURL(detectFaceOptions)) {
        return `${url}?sdf=sdfghhfhgfhgfh`;
    }
    if (isBinaryImage) { }
}
class FaceAPI extends cognitive_service_1.default {
    constructor(apiKey) {
        super(apiKey);
    }
    detectFaceFromImageURL(detectFaceOptions) {
        if (detectFaceOptions.image)
            ;
        this.makeRequest(URL_ts_1.default);
    }
}
exports.FaceAPI = FaceAPI;
//# sourceMappingURL=index.js.map