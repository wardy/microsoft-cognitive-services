import CognitiveService from './classes/cognitive-service'

export class FaceAPI extends CognitiveService {
    private faceApiUrl = ''

    constructor(apiKey: string) {
        super(apiKey);
    }
}