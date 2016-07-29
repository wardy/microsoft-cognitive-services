"use strict";
const defaultRequest = require('request');
class CognitiveService {
    constructor(apiKey, requestLibrary = defaultRequest) {
        this.request = requestLibrary;
        this.apiKey = apiKey;
    }
    makeRequest(url, cb) {
        return this.request('http://localhost:8000/face-checker', cb);
    }
    sayHi() {
        console.log('sdfdsfhdsfkdhsfkdsfldshfsjkhfs');
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CognitiveService;
//# sourceMappingURL=cognitive-service.js.map