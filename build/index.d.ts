import CognitiveService from './classes/cognitive-service';
export interface DetectFaceFromImageUrl {
    returnFaceId?: boolean;
    returnFaceLandmarks?: boolean;
    returnFaceAttributes?: string[];
    image: any;
}
export interface DetectFaceFromBinaryImage {
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
export declare class FaceAPI extends CognitiveService {
    constructor(apiKey: string);
    detectFaceFromtBinaryImage(detectFaceOptions: DetectFaceFromBinaryImage): void;
    detectFaceFromImageUrl(detectFaceOptions: DetectFaceFromImageUrl): void;
}
