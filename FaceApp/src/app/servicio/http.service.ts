import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from "../../environments/config";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  

  constructor(private http: HttpClient) { 
  }

  getPerson(personId: string): Observable<any> {
    let url = `${config.host}persongroups/${config.personGruop}/persons/${personId}`;
    return this.http.get(url, {headers: config.headers.JSON});
  }
  
  addPerson(name: String): Observable<any> {
    let url = `${config.host}persongroups/${config.personGruop}/persons`
    let body = {name: name};
    return this.http.post<any>(url, body, {headers:  config.headers.JSON});
  }

  addFaceToPerson(personId: string, data: any): Observable<{persistedFaceId: string}> {
    let url = `${config.host}persongroups/${config.personGruop}/persons/${personId}/persistedFaces?detectionModel=detection_01`
    return this.http.post<{persistedFaceId: string}>(url, this.makeblob(data), {headers: config.headers.Octent_stream});
  }

  train(): Observable<any> {
    let url = `${config.host}persongroups/${config.personGruop}/train`
    return this.http.post(url,{}, {headers: config.headers.JSON})
  }

  training(){
    let url = `${config.host}persongroups/${config.personGruop}/training`
    return this.http.post(url, {}, {headers: config.headers.JSON})
  }

  detecionFace(data: any): Observable<any>{
    let url = `${config.host}detect?returnFaceId=${config.atributo.returnFaceId}&returnFaceLandmarks=${config.atributo.returnFaceLandmarks}&recognitionModel=${config.atributo.recognitionModel}&returnRecognitionModel=${config.atributo.returnRecognitionModel}&detectionModel=${config.atributo.detectionModel}&faceIdTimeToLive=${config.atributo.faceIdTimeToLive}`;
    return this.http.post<any>(url, this.makeblob(data), {headers: config.headers.Octent_stream});
  }

  identify(faceIds: string[]): Observable<any>{
    let url = `${config.host}identify`;
    let body = {
      personGroupId: config.personGruop,
      faceIds: faceIds,
      maxNumOfCandidatesReturned: 1,
      confidenceThreshold: 0.5
    };
    return this.http.post(url, body, {headers: config.headers.JSON});
  }

  identifyHard(data: any): Observable<any> {
    return this.http.post(config.hostHand, this.makeblob(data), {headers: config.headers.hand_Octent_stream});
  }

  private makeblob(dataURL: any) {
    var BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
        var parts = dataURL.split(',');
        var contentType = parts[0].split(':')[1];
        var raw = decodeURIComponent(parts[1]);
        return new Blob([raw], { type: contentType });
    }
    var parts = dataURL.split(BASE64_MARKER);
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;

    var uInt8Array = new Uint8Array(rawLength);

    for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
}
}

