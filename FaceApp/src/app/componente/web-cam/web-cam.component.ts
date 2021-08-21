import { Component, ElementRef, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { VideoService } from 'src/app/servicio/video.service';
import * as faceapi from 'face-api.js';
import { ModelosService } from 'src/app/servicio/modelos.service';

@Component({
  selector: 'app-web-cam',
  templateUrl: './web-cam.component.html',
  styleUrls: ['./web-cam.component.scss']
})
export class WebCamComponent implements OnInit {

  @ViewChild('video') video?: ElementRef;
  @ViewChild('canvas') canvas?: ElementRef;

  stream?: MediaStream;
  play?: boolean;
  url = '../../../assets/models'

  constructor(private videoS: VideoService, private modelo: ModelosService) {  }

  ngOnInit(): void {
    this.verificarStream();
    this.modelos();
    this.getVideo(); 
  }
  verificarStream() {
    if(!this.stream){
      this.play = true;
      this.stream = this.videoS.getStream();
    }
  }
  modelos() {
    this.modelo.listo.subscribe(() => {
      this.stream = this.videoS.getStream()});
  }

getVideo() {
  this.videoS.streamListo.subscribe(() => {
    this.stream = this.videoS.getStream();
    this.play = true;
  });
}

detencion(){

  if (this.video && this.canvas)
    this.modelo.detencion(this.video, this.canvas);
}

}
