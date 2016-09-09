export interface CB {
    error: void;
    response: Object;
    body: Object;
}
export default class CognitiveService {
    private request;
    private apiKey;
    constructor(apiKey: string, requestLibrary?: any);
    makeRequest(options: any, cb: any): any;
    buildHeaders(headers: any): any;
    sayHi(): void;
}
