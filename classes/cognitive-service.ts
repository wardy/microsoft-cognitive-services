import defaultRequest = require('request');

// import request from 'request';

export interface CB {
  error: void;
  response: Object;
  body: Object;
}

export default class CognitiveService {
  private request;
  private apiKey: string;

  constructor(apiKey:string, requestLibrary: any = defaultRequest) {
    this.request = requestLibrary;
    this.apiKey = apiKey;
  }

  public makeRequest (options, cb) {
    return this.request.post(options, cb);
  }

  public buildHeaders (headers) {
    return Object.assign({}, {'Ocp-Apim-Subscription-Key': this.apiKey }, headers);
  }

  public sayHi () {
    console.log('sdfdsfhdsfkdhsfkdsfldshfsjkhfs');
  }

}
