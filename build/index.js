"use strict";
const cognitive_service_1 = require('./classes/cognitive-service');
const URL_1 = require('./constants/URL');
function buildDetectFaceURL(detectFaceOptions, url) {
    const optionsUrlString = Object.keys(detectFaceOptions)
        .filter((key) => (key !== 'image' && key !== 'binaryImage'))
        .map((validKeyName, idx) => (`${idx === 0 ? `?` : `&`}${validKeyName}=${detectFaceOptions[validKeyName]}`))
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
        const requestUrl = buildDetectFaceURL(detectFaceOptions, URL_1.default.face.detect);
        const headers = this.buildHeaders({ 'Content-Type': 'application/json', 'method': 'POST' });
        const requestOptions = Object.assign({ url: requestUrl }, { headers }, { body: JSON.stringify({ url: detectFaceOptions.image }) });
        this.makeRequest(requestOptions, (err, response, body) => {
            if (err) {
                console.log(err);
            }
            console.log(response);
            console.log(requestOptions);
            console.log('body', body);
        });
    }
}
exports.FaceAPI = FaceAPI;
const face = new FaceAPI('2f79c9a6299f4a5c88df99ada04ca8a8');
face.detectFaceFromImageUrl({ returnFaceId: true,
    returnFaceLandmarks: false,
    returnFaceAttributes: ['age', 'gender'],
    image: 'http://www.industrytap.com/wp-content/uploads/2014/04/dan4.png' });
//# sourceMappingURL=index.js.map