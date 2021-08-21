import { HttpHeaders } from "@angular/common/http";

const clave1 = 'e45b6a937fa2466e978bfbe709261a86'; //Clave face detect
const clave2 = 'cd52eb654e224cac93acab9899daf357'; //Clave hand detect

export let config = {
    host: 'https://centralus.api.cognitive.microsoft.com/face/v1.0/',
    hostHand: 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/caf490d4-6228-43d8-adf1-2ed5a4b1b046/classify/iterations/ModeloManos/image',
    clave1: clave1,
    clave2: clave2,
    personGruop: 'faceapp01',
    headers: {
        Octent_stream: new HttpHeaders({'Content-Type':  'application/octet-stream', 'Ocp-Apim-Subscription-Key': clave1}),
        JSON: new HttpHeaders({'Content-Type': 'application/json', 'Ocp-Apim-Subscription-Key': clave1}),
        hand_Octent_stream: new HttpHeaders({'Content-Type': 'application/octet-stream', 'Prediction-Key': clave2})
    },
    atributo: {
        detectionModel: 'detection_03',
        recognitionModel:'recognition_03',
        returnFaceId: 'true',
        returnFaceLandmarks: 'false',
        returnRecognitionModel: 'false',
        faceIdTimeToLive:'86400'
    }
}