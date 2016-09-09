"use strict";
const defaultRequest = require('request');
class CognitiveService {
    constructor(apiKey, requestLibrary = defaultRequest) {
        this.request = requestLibrary;
        this.apiKey = apiKey;
    }
    makeRequest(options, cb) {
        return this.request.post(options, cb);
    }
    buildHeaders(headers) {
        return Object.assign({}, { 'Ocp-Apim-Subscription-Key': this.apiKey }, headers);
    }
    sayHi() {
        console.log('sdfdsfhdsfkdhsfkdsfldshfsjkhfs');
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CognitiveService;
//# sourceMappingURL=cognitive-service.js.map