export default class CognitiveService {
    private request;
    private apiKey;
    constructor(apiKey: string, requestLibrary?: any);
    makeRequest(url: string, cb: any): any;
    sayHi(): void;
}
