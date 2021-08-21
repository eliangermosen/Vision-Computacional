import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogIdentificarComponent } from 'src/app/componente/dialog-identificar/dialog-identificar.component';
import { EstadosService } from 'src/app/servicio/estados.service';
import { HttpService } from 'src/app/servicio/http.service';
import { VideoService } from 'src/app/servicio/video.service';

@Component({
  selector: 'app-identificar-sena',
  templateUrl: './identificar-sena.component.html',
  styleUrls: ['./identificar-sena.component.scss']
})
export class IdentificarSenaComponent implements OnInit {

  @ViewChild('img1') img?: ElementRef;
  stream?: MediaStream;
  play?: boolean;
  dataImg: any;
  tagName?: string = ' ------- ';
  probability?: string  = ' ------- ';

  constructor(
    private videoS: VideoService, 
    private http: HttpService, 
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private estadoEvento: EstadosService,) { }

  ngOnInit(): void {
    this.stream = this.videoS.getStream();
    this.getVideo();
    console.log('Indentificar on init')
  }

  getVideo() {
    this.videoS.streamListo.subscribe( ()=>{
      this.stream = this.videoS.getStream();
      this.play = true; 
    }, err => console.error(err));
  }
  
  identificar(): void {
    if(this.dataImg){
      this.openDialog();
      this.estadoEvento.cambiosEvento.emit({mesage:'Analizando imagen...', terminado: false});
      this.http.identifyHard(this.dataImg).subscribe( res => {
        console.log(res);
          this.tagName = res.predictions[0].tagName;
          this.probability = res.predictions[0].probability;
          this.estadoEvento.cambiosEvento.emit({mesage:'Listo...', terminado: true});
      });
    }else {
      this.openSnackBar('No has capturaro ninguna imagen', 'Aceptar');
    }
  }

  capturar() {
    const video: HTMLVideoElement | null = document.querySelector('#video1');
    if (this.img && video) {
      this.dataImg = this.videoS.captura(video, this.img);
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 5000});

  }

  openDialog(): void{
    const dialogRef = this.dialog.open(DialogIdentificarComponent, {
      width: '300px',
      data: {}
    });
  }
}
