import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EstadosService } from 'src/app/servicio/estados.service';
import { HttpService } from 'src/app/servicio/http.service';
import { VideoService } from 'src/app/servicio/video.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogIdentificarComponent } from 'src/app/componente/dialog-identificar/dialog-identificar.component';


@Component({
  selector: 'app-registral',
  templateUrl: './registral.component.html',
  styleUrls: ['./registral.component.scss']
})
export class RegistralComponent implements OnInit {

  @ViewChild('img') img?: ElementRef
  @ViewChild('video') videoE?: ElementRef;

  name: string = '';
  dataImg: any;

  constructor(
    private video: VideoService, 
    private http: HttpService, 
    public dialog: MatDialog,
    private estado: EstadosService) { }

  ngOnInit(): void {
  }

  capturar() {
    const vide: HTMLVideoElement | null = document.querySelector('#video');
    if (this.img && vide) {      
      this.dataImg  = this.video.captura(vide, this.img);
    }
  }

  registral() {
    this.openDialog();
    this.estado.cambiosEvento.emit({mesage: 'Iniciando...', terminado: false});
    if (this.dataImg && this.name != ''){
      this.estado.cambiosEvento.emit({mesage: 'Creando persona...', terminado: false});
      this.http.addPerson(this.name).subscribe( res => {
        console.log(res);
        this.estado.cambiosEvento.emit({mesage: 'Enviando imagen...', terminado: false});
        this.http.addFaceToPerson(res.personId, this.dataImg).subscribe( res => {
          console.log(res);
          this.estado.cambiosEvento.emit({mesage: 'Entrenado modelos...', terminado: false});
          this.http.train().subscribe( res => {
           console.log(res);
           this.http.training().subscribe( res => {
             console.log(res);
             this.estado.cambiosEvento.emit({mesage: 'Listo...', terminado: true});
           }, err => {
             this.estado.cambiosEvento.emit({mesage: 'Error', terminado: true})
           });
          });
        });
      });
      
    }else{
      console.log('no iniciado')
    }
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(DialogIdentificarComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log('Dialogo cerraro');
    });
  }
}

