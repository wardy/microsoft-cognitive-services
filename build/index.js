"use strict";
const cognitive_service_1 = require('./classes/cognitive-service');
const URL_1 = require('./constants/URL');
function buildDetectFaceURL(detectFaceOptions, url) {
    const optionsUrlString = Object.keys(detectFaceOptions)
        .filter((key) => (key !== 'image' && key !== 'binaryImage'))
        .map((validKeyName) => (`?${validKeyName}=${detectFaceOptions[validKeyName]}`))
        .join('');
    return `${url}${optionsUrlString}`;
}
class FaceAPI extends cognitive_service_1.default {
    constructor(apiKey) {
        super(apiKey);
    }
    detectFaceFromtBinaryImage(detectFaceOptions) {
        const requestUrl = buildDetectFaceURL(detectFaceOptions, URL_1.default.face.detect);
        console.log(requestUrl);
    }
    detectFaceFromImageUrl(detectFaceOptions) {
    }
}
exports.FaceAPI = FaceAPI;
const face = new FaceAPI('2f79c9a6299f4a5c88df99ada04ca8a8');
face.detectFaceFromImageUrl({ returnFaceId: true,
    returnFaceLandmarks: false,
    returnFaceAttributes: ['age', 'gender'],
    image: 'http://i.stack.imgur.com/GsDIl.jpg' });
//# sourceMappingURL=index.js.map