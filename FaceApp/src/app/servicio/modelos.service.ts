import { Injectable, EventEmitter, ElementRef  } from '@angular/core';
import * as faceapi from 'face-api.js';


@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  public listo: EventEmitter<boolean>;
  public Face: any = faceapi;
  private url: string = 'assets/models'


  constructor() { 
    this.listo = new EventEmitter<any>();
    this.Face = faceapi;
    this.cargarModelo();
  }

  public modelos =  [
    faceapi.nets.tinyFaceDetector.loadFromUri(this.url),
    faceapi.nets.faceLandmark68Net.loadFromUri(this.url),
    faceapi.nets.faceExpressionNet.loadFromUri(this.url),
    // faceapi.nets.faceRecognitionNet.loadFromUri(this.url),
    // faceapi.nets.ageGenderNet.loadFromUri(this.url)
  ]

  public cargarModelo(): void{
    Promise.all(this.modelos).then( res => {
      console.log("modelos cargados");
      this.listo.emit(true);
    })
  }

  detencion(video: ElementRef, canvas: ElementRef){
    console.log('Inicio detector')
    setInterval(async () => {
      if (video && canvas) {

        const detection = await faceapi.detectAllFaces(
          video.nativeElement,
          new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks();
          
        const displaySize = { width: video.nativeElement.width, height: video.nativeElement.height };

        faceapi.matchDimensions(canvas.nativeElement, displaySize);

        if (displaySize && detection) {
          const resizedResults = faceapi.resizeResults(detection, displaySize);

          if (resizedResults) {
            faceapi.draw.drawFaceLandmarks(canvas.nativeElement, resizedResults);
            faceapi.draw.drawDetections(canvas.nativeElement, resizedResults);
          }
        }
      }
    }, 100);
  }
}

