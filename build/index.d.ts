import CognitiveService from "./classes/cognitive-service";
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
export declare class FaceAPI extends CognitiveService {
    constructor(apiKey: string);
    detectFaceFromImageURL(detectFaceOptions: IDetectFaceFromURLOptions): void;
}
