import CognitiveService from './classes/cognitive-service';
import urlConstants from './constants/URL';

export interface DetectFaceFromImageUrl  {
    returnFaceId?: boolean;
    returnFaceLandmarks?: boolean;
    returnFaceAttributes?: string[];
    image: any;
}

export interface DetectFaceFromBinaryImage   {
    returnFaceId?: boolean;
    returnFaceLandmarks?: boolean;
    returnFaceAttributes?: string[];
    binaryImage: any;
}

export interface DetectFaceOptions {
  returnFaceId?: boolean;
  returnFaceLandmarks?: boolean;
  returnFaceAttributes?: string[];
  binaryImage?: any;
  image?: any;
}

function buildDetectFaceURL(detectFaceOptions: DetectFaceOptions, url: string) {
   const optionsUrlString = Object.keys(detectFaceOptions)
      .filter((key) => (key !== 'image' && key !== 'binaryImage'))
      .map((validKeyName, idx) => (`${idx === 0 ? `?` : `&`}${validKeyName}=${detectFaceOptions[validKeyName]}`))
      .join('');
  return `${url}${optionsUrlString}`;
}

export class FaceAPI extends CognitiveService {

  constructor(apiKey: string) {
    super(apiKey);
  }

  public detectFaceFromtBinaryImage(detectFaceOptions: DetectFaceFromBinaryImage ) {
    const requestUrl = buildDetectFaceURL(detectFaceOptions, urlConstants.face.detect);
    // this.makeRequest(urlConstants);
    console.log(requestUrl);
  }

  public detectFaceFromImageUrl(detectFaceOptions: DetectFaceFromImageUrl) {
    const requestUrl = buildDetectFaceURL(detectFaceOptions, urlConstants.face.detect);
    const headers = this.buildHeaders({ 'Content-Type': 'application/json', 'method': 'POST' });
    // this.makeRequest(urlConstants);
    const requestOptions = Object.assign( { url: requestUrl },
                                          { headers },
                                          { body : JSON.stringify({ url: detectFaceOptions.image }) } );
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


const face = new FaceAPI('2f79c9a6299f4a5c88df99ada04ca8a8');
face.detectFaceFromImageUrl({returnFaceId: true,
    returnFaceLandmarks: false,
    returnFaceAttributes: ['age', 'gender'],
    image: 'http://www.industrytap.com/wp-content/uploads/2014/04/dan4.png'});