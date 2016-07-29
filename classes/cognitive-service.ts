import defaultRequest = require('request');
// import request from 'request';

export default class CognitiveService {
  private request;
  private apiKey: string;

  constructor(apiKey:string, requestLibrary: any = defaultRequest) {
    this.request = requestLibrary;
    this.apiKey = apiKey;
  }

  public makeRequest (url:string, cb) {
    return this.request('http://localhost:8000/face-checker', cb);
  }

  public sayHi () {
    console.log('sdfdsfhdsfkdhsfkdsfldshfsjkhfs');
  }

}

