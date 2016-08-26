import CognitiveService from "./classes/cognitive-service";
import urlConstants from "./constants/URL.ts";

export interface IDetectFace {
    returnFaceID: boolean;
    returnFaceLandmarks: boolean;
    returnFaceAttributes: string;
}

export interface IDetectFaceFromURLOptions extends IDetectFace {
    image: URL;
}

export interface IDetectFaceFromBinaryImage extends IDetectFace {
    binaryImage: Blob;
}

function isBinaryImage(detectFaceOptions: IDetectFaceFromBinaryImage | IDetectFaceFromURLOptions): detectFaceOptions is IDetectFaceFromBinaryImage {
    return (<IDetectFaceFromBinaryImage>detectFaceOptions).binaryImage !== undefined;
}

function isImageURL(detectFaceOptions: IDetectFaceFromBinaryImage | IDetectFaceFromURLOptions): detectFaceOptions is IDetectFaceFromURLOptions {
    return (<IDetectFaceFromURLOptions>detectFaceOptions).image !== undefined;
}

function buildDetectFaceURL(detectFaceOptions: IDetectFaceFromURLOptions | IDetectFaceFromBinaryImage, url: string) {
  if (isImageURL(detectFaceOptions)) {
    return `${url}?sdf=sdfghhfhgfhgfh`;
  }
  if (isBinaryImage) {}
}

export class FaceAPI extends CognitiveService {

  constructor(apiKey: string) {
    super(apiKey);
  }

  detectFaceFromImageURL(detectFaceOptions: IDetectFaceFromURLOptions) {
    if (detectFaceOptions.image);
    this.makeRequest(urlConstants);
  }
}