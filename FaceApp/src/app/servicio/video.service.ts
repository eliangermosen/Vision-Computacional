import { Injectable, EventEmitter, ElementRef } from '@angular/core';
import { ModelosService } from './modelos.service';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  streamListo: EventEmitter<boolean> = new EventEmitter<boolean>();
  public play?: boolean;
  public stream?: MediaStream;
;

  constructor(private Modelo: ModelosService) {
    this.getVideo();
  }

getStream(): any {
  if(this.stream) return this.stream;

  this.getVideo();
}


  getVideo():void {
    if (navigator && navigator.mediaDevices.getUserMedia({ video: true })) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(
          stream => {
            this.stream = stream
            this.play = true;
            this.streamListo.emit(true)
          },
          err => console.error(err)
        ).catch(
          err => console.error(err)
        );
    } else {
      console.log('No se encuentran dispositivos de video.')
      alert('errore')
    }
  }

  captura(video: any,  img: ElementRef | undefined = undefined): any  {
    let width = video?.getAttribute('width');
    let height = video?.getAttribute('height');
 
    if(video && width && height){
    
      const canvas = document.createElement('canvas');
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      const imga = document.createElement('img');
    
      canvas.getContext('2d')?.drawImage(video, 0, 0, 500, 375);
      
      let data = canvas.toDataURL('imagen/png');

      if(img) img.nativeElement.setAttribute('src', data);
      return data;
      //  console.log(this.makeblob(data))
      // this.api.getPosh(this.makeblob(data));
      
    }
  }

}
